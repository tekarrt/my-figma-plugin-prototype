import Article from "./components/Article";
import Avatar from "./components/Avatar";
import Block from "./components/Block";
import SerchBar from "./components/SerchBar";


figma.showUI(__html__, { width: 300, height: 270 });

figma.ui.onmessage = msg => {
    const [type, scale, color] = [msg.type.value, msg.scale.value, msg.color.value];
    switch (type) {
        case 'block':
            Block.create(type, scale, color);
            break;
        case 'avatar':
            Avatar.create(type, scale, color);
            break;
        case 'src':
            SerchBar.create(type, scale, color);
            break
        case 'article':
            Article.create(type, scale, color)
            break
    }
    figma.closePlugin();
};
