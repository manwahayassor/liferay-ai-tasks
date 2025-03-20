import { Liferay } from '../services/liferay';

export function getIconSpriteMap() {
    const pathThemeImages = Liferay.ThemeDisplay.getPathThemeImages();
    const spritemap = `${pathThemeImages}/clay/icons.svg`;

    return spritemap;
}
