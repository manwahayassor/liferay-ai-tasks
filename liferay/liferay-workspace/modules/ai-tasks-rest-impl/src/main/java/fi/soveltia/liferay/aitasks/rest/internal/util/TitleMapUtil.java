
package fi.soveltia.liferay.aitasks.rest.internal.util;

import com.liferay.portal.kernel.language.LanguageUtil;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * @author Petteri Karttunen
 */
public class TitleMapUtil {

	public static Map<Locale, String> copy(Map<Locale, String> sourceTitleMap) {
		Map<Locale, String> targetTitleMap = new HashMap<>();

		for (Map.Entry<Locale, String> entry : sourceTitleMap.entrySet()) {
			targetTitleMap.put(
				entry.getKey(),
				LanguageUtil.format(
					entry.getKey(), "copy-of-x", entry.getValue()));
		}

		return targetTitleMap;
	}

}