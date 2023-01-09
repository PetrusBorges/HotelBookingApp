import { SvgXml } from 'react-native-svg';

export function Star() {
  const markup = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="16" height="16" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_1_2" transform="scale(0.0625)"/>
  </pattern>
  <image id="image0_1_2" width="16" height="16" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhUlEQVR4nGNgwAP2z/eSAGEGcsH5zclzQJgszYfmhoo+Plv78NGZ2sdkueL85uQ5f98s/P/vzcL/57akzCTZ9kdn6h7+f7f4PwgTdMWqVaFsu2Z7aR5bG51yZnNC36Xt6QdBtsMMALFBYiA5kBqQWpAesObDy4Pn3Tlc8uTtzd7vP5/PgmvChUFqQGpBekB6GVatCmW+sDV19Y/nc/4S0owwZM6/C9vT1p+ZacwK8wLzuY1JK74/nfmbkOYfz2b/Pbcpce3+ensW9HBgPrs5cSk+Q74/nfnn3NbklSC1WANzz2wn8ecXm17hMuD5hebXIDU4Y+PgskDvzw+n/MNlwOcHU/4dXRbqjdOA0xtiW0EJB6bh071J30EYxgfJnd4Q34bTgMvb0xeDFH59NP33zQP5R46tiEw5vi4q6MqurP1fHk79AZK7tCN9EU4DLu5IP3brYNH5U+tj0v7/Z2CEiYPYJ1ZFJd/YV3Ds4ra0ozgNOLA0JLS+vp4Jlzwo9A8sDg5DFgQAueOiSQ9xpzkAAAAASUVORK5CYII="/>
  </defs>
  </svg>`;

  return <SvgXml xml={markup} />;
}
