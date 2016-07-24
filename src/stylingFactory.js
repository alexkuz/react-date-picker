import { createStyling } from 'react-base16-styling'

function mapColors(theme) {
  return {
    TEXT_COLOR: theme.base00,
    BACKGROUND_COLOR: theme.base07
  };
}

function getStylingFromBase16(base16Theme) {
  const colors = mapColors(base16Theme);

  return {
    historyView: ({ className, style }) => ({
      className: `react-date-picker__history-view react-date-picker__history-view--theme-${base16Theme.scheme} ${className}`,
      style: Object.assign({}, style, {
        color: colors.TEXT_COLOR,
        backgroundColor: colors.BACKGROUND_COLOR
      })
    })
  };
}

export default createStyling(
  getStylingFromBase16,
  {}
);