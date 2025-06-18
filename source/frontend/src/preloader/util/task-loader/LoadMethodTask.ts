import { type ILoadTaskOptions } from '@mediamonks/task-loader/lib/interface/ILoadTaskOptions';
import AbstractLoadTask from '@mediamonks/task-loader/lib/task/AbstractLoadTask';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class LoadMethodTask extends AbstractLoadTask<any> {
  public constructor(options: Partial<ILoadMethodTaskOptions>) {
    // Set the batch to 1 and the cache to false
    super(
      Object.assign(options, { batchSize: 1, cached: false, assets: [] }) as ILoadMethodTaskOptions,
    );
  }

  /**
   * @public
   * @method loadAsset
   * @param {string} src
   * @returns {Promise<any>}
   */
  // eslint-disable-next-line class-methods-use-this
  public loadAsset(): Promise<void> {
    //  has it's own asset loader and manages the loading mechanism internally
    return Promise.resolve();
  }

  /**
   * @public
   * @method load
   * @param {(progress: number) => void} update
   * @returns {Promise<void>}
   */
  public load(update: (progress: number) => void): Promise<void> {
    return new Promise((resolve) => {
      (this.options as ILoadMethodTaskOptions).loadMethod(resolve, (progress: number) => {
        update(progress);
      });
    });
  }

  /**
   * @public
   * @method dispose
   */
  public dispose(): void {
    super.dispose();
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-explicit-any
export interface ILoadMethodTaskOptions extends ILoadTaskOptions<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>;

  loadMethod(onComplete: () => void, onProgress: (progress: number) => void): void;
}
