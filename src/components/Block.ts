class Block {
    create(type, scale, color) {
        try {
            const rect = figma.createRectangle();
            const frame = figma.createFrame();
            const [width, height] = [350 * scale, 240 * scale]
            rect.fills = [{type: 'SOLID', color: color}];
            rect.resize(width, height);
            frame.resize(width, height);
            frame.appendChild(rect);
            if (figma.currentPage.selection) {
                if (Array.isArray(figma.currentPage.selection)) {
                    const currentSelection = figma.currentPage.selection[0];
                    frame.x = currentSelection.width / 2 - frame.width / 2;
                    frame.y = currentSelection.height / 2 - frame.height / 2;
                    currentSelection.appendChild(frame);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default new Block();