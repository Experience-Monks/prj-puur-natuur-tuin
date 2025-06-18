import { graphqlRequest, type Options } from './graphqlRequest';

type GetAllRecordsOptions<QueryResult, DataKey extends keyof QueryResult> = Options<
  QueryResult,
  { first: number; skip: number }
> & {
  dataKey: DataKey;
};

const recordCount = 100;

export async function getAllRecords<QueryResult, DataKey extends keyof QueryResult>(
  options: GetAllRecordsOptions<QueryResult, DataKey>,
): Promise<QueryResult[DataKey]> {
  const { dataKey, ...queryOptions } = options;

  const queryResult = await graphqlRequest({
    ...queryOptions,
    variables: {
      first: recordCount,
      skip: 0,
    },
  });

  let records = queryResult[dataKey];
  let hasMoreRecords = (records as Array<unknown>).length === recordCount;

  // Sanity doesn't support meta data on the paginated requests, therefore we start a while loop to keep fetching the
  // records until nothing else is returned
  while (hasMoreRecords) {
    const currentRecords = records as Array<unknown>;

    // eslint-disable-next-line no-await-in-loop
    const result = await graphqlRequest({
      ...queryOptions,
      variables: {
        first: recordCount,
        skip: currentRecords.length,
      },
    });

    const newRecords = result[dataKey] as Array<unknown>;

    if (newRecords.length > 0) {
      records = [...currentRecords, ...newRecords] as Awaited<QueryResult>[DataKey];
    } else {
      // Reached the total amount of records, so stopping the loop
      hasMoreRecords = false;
    }
  }

  return records;
}
