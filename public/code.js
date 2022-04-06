'use strict';

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
        }
        catch (e) {
            console.log(e);
        }
    }
}
var Article$1 = new Article();
//# sourceMappingURL=Article.js.map

class Avatar {
    create(type, scale, color) {
        try {
            const ellipse = figma.createEllipse();
            const frame = figma.createFrame();
            const [width, height] = [50 * scale, 50 * scale];
            ellipse.fills = [{ type: 'SOLID', color: color }];
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
        }
        catch (e) {
            console.log(e);
        }
    }
}
var Avatar$1 = new Avatar();
//# sourceMappingURL=Avatar.js.map

class Block {
    create(type, scale, color) {
        try {
            const rect = figma.createRectangle();
            const frame = figma.createFrame();
            const [width, height] = [350 * scale, 240 * scale];
            rect.fills = [{ type: 'SOLID', color: color }];
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
        }
        catch (e) {
            console.log(e);
        }
    }
}
var Block$1 = new Block();
//# sourceMappingURL=Block.js.map

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
        }
        catch (e) {
            console.log(e);
        }
    }
}
var SerchBar$1 = new SerchBar();
//# sourceMappingURL=SerchBar.js.map

figma.showUI(__html__, { width: 300, height: 270 });
figma.ui.onmessage = msg => {
    const [type, scale, color] = [msg.type.value, msg.scale.value, msg.color.value];
    switch (type) {
        case 'block':
            Block$1.create(type, scale, color);
            break;
        case 'avatar':
            Avatar$1.create(type, scale, color);
            break;
        case 'src':
            SerchBar$1.create(type, scale, color);
            break;
        case 'article':
            Article$1.create(type, scale, color);
            break;
    }
    figma.closePlugin();
};
//# sourceMappingURL=code.js.map
