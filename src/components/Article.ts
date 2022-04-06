class Article {
    create(type, scale, color) {
        try {
            const frame = figma.createFrame();
            const firstRect = figma.createRectangle();
            const secondRect = figma.createRectangle();
            firstRect.fills = [{ type: 'SOLID', color: color }];
            secondRect.fills = [{ type: 'SOLID', color: color }];
            firstRect.resize(144 * scale, 150 * scale);
            secondRect.resize(144 * scale, 25 * scale);
            frame.resize(firstRect.width, firstRect.height + secondRect.height + 24);
            frame.appendChild(firstRect);
            frame.appendChild(secondRect);
            secondRect.y = firstRect.height + 24;
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

export default new Article();