class Avatar {
    create(type, scale, color) {
        try {
            const ellipse = figma.createEllipse();
            const frame = figma.createFrame();
            const [width, height] = [50 * scale, 50 * scale]
            ellipse.fills = [{type: 'SOLID', color: color}];
            ellipse.resize(width, height);
            frame.resize(width, height);
            frame.appendChild(ellipse);
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

export default new Avatar();