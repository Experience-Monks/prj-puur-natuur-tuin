function checkImageSupport(base64: string) {
  return new Promise<boolean>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.width > 0 && img.height > 0);
    };
    img.onerror = () => {
      resolve(false);
    };
    try {
      img.src = base64;
    } catch (e) {
      resolve(false);
    }
  });
}

export function getStaticFilename(file: string): string {
  return '/assets/webgl/' + file;
}

export default class WebGLTextureConfig {
  public static useWebp: boolean = true;

  public static getFileName(filename: string, transparent: boolean = false): string {
    const map = './';

    if (WebGLTextureConfig.useWebp) {
      return getStaticFilename(map + filename + '.webp');
    } else {
      if (transparent) {
        return getStaticFilename(map + filename + '.png');
      } else {
        return getStaticFilename(map + filename + '.jpg');
      }
    }
  }

  public static checkWebpSupported(): Promise<boolean> {
    return checkImageSupport(
      'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    );
  }
}
