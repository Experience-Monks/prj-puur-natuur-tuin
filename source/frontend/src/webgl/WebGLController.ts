// import ParamGroup from 'mediamonks-webgl/utils/params/ParamGroup';
// import ParamsGui from 'mediamonks-webgl/utils/paramsGui/ParamsGui';
// import Renderer from 'mediamonks-webgl/renderer/render/Renderer';
// import CanvasManager from 'mediamonks-webgl/renderer/core/CanvasManager';
// import WebGLPreLoader from 'mediamonks-webgl/renderer/core/WebGLPreLoader';
// import MaterialLoader from 'mediamonks-webgl/renderer/material/MaterialLoader';
// import Time from 'mediamonks-webgl/renderer/core/Time';
// import IWebGLDestructible from 'mediamonks-webgl/renderer/core/IWebGLDestructible';
// import {webpackContextToDict} from 'mediamonks-webgl/renderer/utils/FrameworkHelpers';
// import {addShaderSourceDict} from './lib/renderer/material/ShaderLoadUtils';
// import RendererWebGL2 from "./lib/renderer/render/RendererWebGL2";

export default class WebGLController {
  // private renderer: Renderer;
  // private canvasManager: CanvasManager;
  // private tunnel: MaterialLoader;
  // private uiVisible: boolean;

  constructor(canvasParent: HTMLElement, preloader: any, uiVisible: boolean) {
    // this.uiVisible = uiVisible;
    // addShaderSourceDict(webpackContextToDict(require.context('./shaders', true)));
    // this.canvasManager = new CanvasManager(canvasParent);
    // this.renderer = new RendererWebGL2(this.canvasManager.canvas, {antialias: true, mouseEventsElement: document.body});
    // this.tunnel = new MaterialLoader(this.renderer, preloader, 'tunnel');
  }

  //will be called from page controller
  public init(): void {
    // const paramGroup: ParamGroup = new ParamGroup('controls');
    // const shaderGroup: ParamGroup = paramGroup.addGroup('shader', [this.tunnel]);
    //
    // shaderGroup.addShaderParamFloat('_BandSpacing', 0.4, 0, 1);
    // shaderGroup.addShaderParamFloat('_FrequencyY', 2, 0.1, 4);
    // shaderGroup.addShaderParamFloat('_SpeedZ', 4, 0, 32);
    // shaderGroup.addShaderParamFloat('_RandomSpeed', 6, 0, 8);
    // shaderGroup.addShaderParamFloat('_FrequencyZ', 0.03, 0.001, 0.1);
    //
    // this.renderer.init();
    //
    // if (this.uiVisible) {
    //     new ParamsGui().init(paramGroup);
    // }
    this.update();
  }

  public update(time: number = 0): void {
    window.requestAnimationFrame((time) => this.update(time));

    // Time.instance.update(time);
    // this.canvasManager.update(Time.instance.dt);
    //
    // this.tunnel.setFloat('iTime', Time.instance.time);
    // this.tunnel.setVector2('iResolution', this.renderer.size);
    // this.renderer.blit(null, null, this.tunnel);
  }

  destruct() {}
}
