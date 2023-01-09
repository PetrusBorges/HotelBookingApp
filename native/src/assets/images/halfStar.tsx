import { SvgXml } from 'react-native-svg';

export function HalfStar() {
  const markup = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="16" height="16" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_2_3" transform="scale(0.0625)"/>
  </pattern>
  <image id="image0_2_3" width="16" height="16" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nGNgwAMOLnaXBGEGcsH5LSlzbx5sWEmW5kNzQ0Ufn6l/8OXNuS9kueLcluS5f98s/P///9//Nw43Lifd9rO1D/+/W/wfBL68Oftl/3wvCZwatk30YN8+y137+Mqo1DObE/ou7kg/ALYdagDIFffPTr1wYVfBVJAakFqQHrDmw8uD5905XPrk7c2e7z+fzYZoQsZo4N/fb/9/fX3y9/2Tw5+Prgqbz7BqVSjzha2pq388n/MXQzMWAyAO+vH/7qkJ+8/MNGYFuwJkyLmNSSu+P535hxgX3Dravnt/vT0LSjisWhXKfHZz4tIfz2b9xmXAvz9f/9883L4DpBZrYO6c5ir2/ELTa1wGfPtw8+ee2U7iOGPjyNIgr88Pp/zDZcDfX+//H1kR5oXTgNMb4tv+waLv3eL/n+5N+v7nx+t/SJ74f35jRjdOAy5vT18M0vjt8YzfN/cXHD22IjLl+Kb44KdXl179++s92KB7p/q34DTg4o70Y7cOFp0/uS4u8/9/BkaYOIh9ckNSxuu7m+7cPzf9Mk4DDi0KjMAZwtCYAqlBFgQAdYC5Xu3OHB0AAAAASUVORK5CYII="/>
  </defs>
  </svg>`;

  return <SvgXml xml={markup} />;
}
