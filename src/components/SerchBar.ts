class SerchBar {
    create(type, scale, color) {
        try {
            const frame = figma.createFrame();
            const firstRect = figma.createRectangle();
            const secondRect = figma.createRectangle();
            firstRect.fills = [{ type: 'SOLID', color: color }];
            secondRect.fills = [{ type: 'SOLID', color: color }];
            firstRect.resize(300 * scale, 34 * scale);
            secondRect.resize(34 * scale, 34 * scale);
            frame.resize(firstRect.width + secondRect.width + 16, 34 * scale);
            frame.appendChild(firstRect);
            frame.appendChild(secondRect);
            secondRect.x = firstRect.width + 16;
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

export default new SerchBar();