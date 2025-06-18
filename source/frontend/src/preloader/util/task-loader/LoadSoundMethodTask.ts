import { AbstractLoadTask, type ILoadTaskOptions } from '@mediamonks/task-loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class LoadSoundMethodTask extends AbstractLoadTask<any> {
  public constructor(options: Partial<ILoadSoundMethodTaskOptions>) {
    // Set the batch to 1 and the cache to false
    super(Object.assign(options, { assets: [], batchSize: 1, cached: false }));
  }

  /**
   * @public
   * @method loadAsset
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
    return (this.options as ILoadSoundMethodTaskOptions).loadMethod((progress: number) => {
      update(progress);
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
export interface ILoadSoundMethodTaskOptions extends ILoadTaskOptions<any> {
  loadMethod(progress: (progress: number) => void): Promise<void>;
}
