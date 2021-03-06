var RenderTextureCanvas = {

    fill: function (rgb)
    {
        var ur = ((rgb >> 16)|0) & 0xff;
        var ug = ((rgb >> 8)|0) & 0xff;
        var ub = (rgb|0) & 0xff;

        this.context.fillStyle = 'rgb(' + ur + ',' + ug + ',' + ub + ')';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        return this;
    },

    clear: function ()
    {
        this.context.save();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.restore();

        return this;
    },

    draw: function (texture, frame, x, y)
    {
        var cd = frame.canvasData;
        var source = frame.source.image;

        var matrix = this.currentMatrix;

        this.context.globalAlpha = this.globalAlpha;
        this.context.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        this.context.drawImage(source, cd.sx, cd.sy, cd.sWidth, cd.sHeight, x, y, cd.dWidth, cd.dHeight);

        return this;
    }

};

module.exports = RenderTextureCanvas;
