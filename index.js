
module.exports = class Button extends Layer {
  constructor(options={}) {
    // "push" type: NSMomentaryPushInButton
    // "textured" type: NSTexturedRoundedBezelStyle
    options.type = options.type || "push"

    super(_.extend(options, {
      borderRadius: 4,
      backgroundColor: options.type == "push" ? "white" : "rgba(255,255,255,0.9)"
    }))


    this.style.boxShadow = options.type == "push"
      ? `0 0 0 0.6px rgba(0,0,0,0.21),
         0 0.5px 0 rgba(0,0,0,0.08),
         0 1px 0 rgba(0,0,0,0.02),
         0 1.5px 0 rgba(0,0,0,0.05)`
      : `inset 0 1px 0 white,
         0 0.5px 0 rgba(0,0,0,0.11),
         0 1px 0 rgba(0,0,0,0.06)`

    this.icon = new Layer({
      superLayer: this,
      width: 18,
      height: 18,
      midX: this.width/2,
      midY: this.height/2,
      image: options.icon,
      opacity: 0.55
    })
  }
}
