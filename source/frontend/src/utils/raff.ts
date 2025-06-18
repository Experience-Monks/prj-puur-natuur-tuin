/**
 * You should wrap your function using this higher order function whenever you want
 * to limit the amount of calls to your function. This will request your function
 * be called before the browser performs the next repaint. The number of callbacks
 * is usually 60 times per second, but will generally match the display refresh
 * rate in most web browsers as per W3C recommendation.
 *
 * @param callback - The function to call when it's time to update for the next
 * repaint. The callback function is passed one single argument, a
 * DOMHighResTimeStamp similar to the one returned by performance.now(),
 * indicating the point in time when requestAnimationFrame() starts to execute
 * callback functions.
 *
 * @returns - A long integer value, the request id, that uniquely identifies the
 * entry in the callback list. This is a non-zero value, but you may not make
 * any other assumptions about its value. You can pass this value to
 * window.cancelAnimationFrame() to cancel the refresh callback request.
 */
export function raff(callback: FrameRequestCallback): () => number {
  let raf: number;

  return (): number => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(callback);

    return raf;
  };
}
