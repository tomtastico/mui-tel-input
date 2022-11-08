import g from "react";
import { styled as K } from "@mui/material/styles";
import { jsx as w, jsxs as G, Fragment as H3 } from "react/jsx-runtime";
import { Typography as d2 } from "@mui/material";
import N3 from "@mui/material/IconButton";
import r2 from "@mui/material/MenuItem";
import n2 from "@mui/material/Typography";
import c2 from "@mui/material/ListItemIcon";
import h2 from "@mui/material/ListItemText";
import s2 from "@mui/material/Menu";
import o2 from "@mui/material/InputAdornment";
import v2 from "@mui/material/TextField";
const f2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeCAYAAABXNvynAAAMeGlDQ1BEaXNwbGF5AABIiZVXd1ST9xp+vpGEhBFGQEBG2EsQ2UNmmIKCbBBHSAIEQoghQcU9ahWtWxw40bqLViuodaJWrRbBbR1FLSqVWtQ6Ubl/JKD13nvuue85ye89z+95n3d838nJC3DfCBUKGWkIlMlVyrT4aH5Obh6f9RAU2ODAAG5CUYUiKjU1GQB6z8+MAF5dAwEAlz2FCoUM/58ZiyUVIoDIB1AgrhCVAcRxgF4jUihVADMfgMM4lUIFMKcB4ClzcvMA5jIAvCKNvw0Ar0DjHwbAU2akCQBmC6CjJxQqiwCD2wD4laIiFWDwHoC3XCyVA9wBAMJFxUIxwJUBGFBWVi4GuCsBuFaKihQA9ziAoILPNIv+oV/Qpy8UFvX5mr4AADox0gqFTDjh/xzN/7Yymbo3hzMAvWJlQhoAHkDcKC1PSgOgBxCd8oJhKQCMAeKNVKyZO0ByitUJmRo+aSWqEOQBMANIb7EwJgmAFUDGyWXDkrV4QaE0LhGAIUCOl6oSMwCYA+QcSUVsupazQVmeps1FNhQqBVFa/KxQCWhz3VWXZkZp9Z8XSxK1+pRBVXFGNgAOQDlWSrOGATAAKK+K0vQkLWdwVbFgWC9HqU7LBOAIUGkSeXy0Rp+qLFTGpWn51WUVvf1SG4qlicO0/l5VcUaCZj7UKZEwNl3TC9UikUdl9upIKnKSe3sRS2JiNb1TjyXyzHStzhuFKjpNE0tzFLJULZ+2l8ji0wDYA7RfRWW6NpbOUikztM+ILlSoUjM0ddJVJcIhqZp66EVIhgAx4EMNPgpQjhJImzsbO8HX3sRBCCWKIIGnFumNyIYQSsghRDqq8CfkkKCiLy4aQighQSXk+NCHar49UQghlKiEBBUoxUMoUYYkyCCBGkpIIO/LloXfoYT037ILwYcI5ZChHEpI/wvei35CoiBAshZR92bkc3uZzFhmDDOBGcd0oy3pcDqUTqbD6Ug6nPahg+jg3j4+8RkPGa2M+4yrjDbGzdHSGcovqhyKNqi1M5Sg4PNZ0M60D+1PR9NhdDgdDD5tRlvCk/ajg+goOoIOpf3pYAi0dauh/GKGX3Tw2dPQ8tjebJLdjx3Jdv0y0sDdwL9PRQL5P+ajqbWgb96Cvpsv8ws+m74Y5Uj6kknNofZRZ6gT1DnqMNUIPnWMOkBdoI5QjZ+9Xb9DiaK+bGmQQI5SyCD9t3xCbU4lJKjw3und4f1ec6eSjFcBgKBcMUEpLSpW8aMUCpmEnygXeQ3g+3j7+AA5uXl8zc/Xi+EgABBmFz5hM38Dwo719PT8+Akbcgz4PhDgHPyEuQYBRrrA2YMitbJSg9EAwAAHXPBgARs4wBWe8EEAQhGJWAxBCjKQi1EQoRhlUGIcJmE6ZmMeFmE5VmM9NmEbvsNeNOIwTuAnnEcLruIW2tCOJ+jCK3QTBMEi9AkTwoKwJZwID8KHCCLCiVgimUgjcokxRBEhJ9TEJGImMY9YQqwmNhLbie+Jg8QJ4hzRStwk7hEdxHPiHUmReiSPtCadyYFkEBlFJpEZ5EiyiBxLVpGzyAXkSrKO3EU2kCfI8+RVso18Qr6kQOlSZpQd5UkFUQIqhcqjCiklNYWqpmqoOqqeOkSdoS5TbVQn9ZZm0iY0n/akQ+kEOpMW0WPpKfR8ejW9jW6gT9GX6Xt0F/2Roc+wYngwQhiJjBxGEWMcYzajhrGFsZ9xmnGV0c54xWQyzZguzEBmAjOXWcKcyJzPXMvczTzObGU+YL5ksVgWLA9WGCuFJWSpWLNZq1i7WMdYl1jtrDc6ujq2Oj46cTp5OnKdGTo1Ojt0jupc0nmk0802ZDuxQ9gpbDF7AnshezP7EPsiu53dzTHiuHDCOBmcEs50zkpOPec05zbnha6urr1usO5wXanuNN2Vunt0z+re032rZ6znrifQy9dT6y3Q26p3XO+m3gt9fX1n/Uj9PH2V/gL97fon9e/qvzEwMfAySDQQG0w1qDVoMLhk8JTL5jpxo7ijuFXcGu4+7kVupyHb0NlQYCg0nGJYa3jQ8LrhSyMTo0FGKUZlRvONdhidM3pszDJ2No41FhvPMt5kfNL4gQll4mAiMBGZzDTZbHLapJ3H5LnwEnklvHm873jNvC5TY1M/0yzT8aa1pkdM28woM2ezRDOZ2UKzvWbXzN71s+4X1U/Sb26/+n6X+r02728eaS4xrzbfbX7V/J0F3yLWotRisUWjxR1L2tLdcrjlOMt1lqctO/vz+of2F/Wv7r+3/69WpJW7VZrVRKtNVhesXlrbWMdbK6xXWZ+07rQxs4m0KbFZZnPUpsPWxDbcVmq7zPaY7R98U34UX8ZfyT/F77KzskuwU9tttGu267Z3sc+0n2G/2/6OA8chyKHQYZlDk0OXo63jUMdJjjsdf3ViOwU5FTutcDrj9NrZxTnb+WvnRufHLuYuiS5VLjtdbrvqu0a4jnWtc73ixnQLcit1W+vW4k66+7sXu9e6X/QgPQI8pB5rPVoHMAYED5APqBtw3VPPM8qz0nOn5z0vM69krxlejV5PBzoOzBu4eOCZgR+9/b1l3pu9bw0yHjRk0IxBhwY993H3EfnU+lzx1feN853qe8D3mZ+Hn8Rvnd8NfxP/of5f+zf5fwgIDFAG1Ad0BDoGjglcE3g9iBeUGjQ/6GwwIzg6eGrw4eC3IQEhqpC9IX+FeoaWhu4IfTzYZbBk8ObBD8Lsw4RhG8PawvnhY8I3hLdF2EUII+oi7kc6RIojt0Q+inKLKonaFfU02jtaGb0/+rUgRDBZcDyGiomPqY5pjjWOzYxdHXs3zj6uKG5nXFe8f/zE+OMJjISkhMUJ1xOtE0WJ2xO7hgQOmTzkVJJeUnrS6qT7ye7JyuRDQ8mhQ4YuHXp7mNMw+bDGFKQkpixNuZPqkjo29cfhzOGpw2uHP0wblDYp7Uy6Sfro9B3przKiMxZm3Mp0zVRnNmVxs/Kztme9zo7JXpLdljMwZ3LO+VzLXGnugTxWXlbelryXI2JHLB/Rnu+fPzv/2kiXkeNHnhtlOUo26sho7mjh6H1jGGOyx+wY816YIqwTvixILFhT0CUSiFaInogjxcvEHZIwyRLJo8KwwiWFj4vCipYWdRRHFNcUd0oF0tXSZyUJJetLXpemlG4t7ZFly3aX6ZSNKTsoN5aXyk+V25SPL29VeChmK9rGhoxdPrZLmaTcUkFUjKw4oOKpFKoLalf1V+p7leGVtZVvxmWN2zfeaLx8/IUJ7hPmTnhUFVf17UR6omhi0yS7SdMn3ZscNXnjFGJKwZSmqQ5TZ01tnxY/bdt0zvTS6b/M8J6xZMbfM7NnHpplPWvarAdfxX+1c7bBbOXs61+Hfr1+Dj1HOqd5ru/cVXM/Vourf57nPa9m3vv5ovk/fzPom5Xf9CwoXNC8MGDhukXMRfJF1xZHLN62xGhJ1ZIHS4cubVjGX1a97O/lo5efq/GrWb+Cs0K9om1l8soDqxxXLVr1fnXx6qu10bW711itmbvm9Vrx2kvrItfVr7deP2/9uw3SDTc2xm9sqHOuq9nE3FS56eHmrM1nvg36dvsWyy3ztnzYKt/ati1t26ntgdu377DasXAnuVO9s2NX/q6W72K+O1DvWb9xt9nueXuwR73nj+/HfH9tb9Lepn1B++p/cPphzX6T/dUNRMOEhq7G4sa2A7kHWg8OOdh0KPTQ/h+9ftx62O5w7RHTIwuPco7OOtpzrOrYy+OK450nik48aBrddOtkzskrp4afaj6ddPrsT3E/nTwTdebY2bCzh8+FnDv4c9DPjecDzjdc8L+w/xf/X/Y3BzQ3XAy8eKAluOVQ6+DWo5ciLp24HHP5pyuJV85fHXa19VrmtRvX86+33RDfeHxTdvPZr5W/dt+adptxu/qO4Z2au1Z3635z+213W0DbkXsx9y7cT79/64HowZPfK35/3z7rof7Dmke2j7Y/9nl8uCOuo+WPEX+0P1E86e6c/afRn2ueuj794a/Ivy505XS1P1M+63k+/4XFi61/+/3d9DL15d1XZa+6X1e/sXiz7W3Q2zPvst896h73nvV+5Qe3D4c+Jn283VPW06MQKoUAAAoAWVgIPN8K6OcCJi0AZ4RmFwQAEJr9FdD8B/nPvmZfBAAEAPU8YHgnILgO7NkMOBcC3HwgVR/ICAbp69v30VpFoa+PRksvGmDc7el54QywlgIfFvX0dNf19HzYBFC3geNyzQ4KAExDYEPih4KyAvwH0+ynn/X45QmQvr5++PL8F6mCkLerjl90AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDMtMTJUMTQ6MTY6NTArMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAzLTIwVDEwOjIyOjUxKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTIwVDEwOjIyOjUxKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZDY2ZDIzMC1mMDk3LTRhMjUtODkxNi1mN2YxMmQ2NTRhNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmQ2NmQyMzAtZjA5Ny00YTI1LTg5MTYtZjdmMTJkNjU0YTY5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmQ2NmQyMzAtZjA5Ny00YTI1LTg5MTYtZjdmMTJkNjU0YTY5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZDY2ZDIzMC1mMDk3LTRhMjUtODkxNi1mN2YxMmQ2NTRhNjkiIHN0RXZ0OndoZW49IjIwMjItMDMtMTJUMTQ6MTY6NTArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjHOcacAAAMOSURBVFiFzZixa1NBHMe/FxOIryWNNUkjJCYQkhJKU2oXsdJowU7t6KZroYNDB7eOgn+Dg0t10MmhrhUUEelm2hDaUmibQBtbQxuaI5JHn4O8cHe59/LuRY3fJbnj97vf5373vSOEzC8t4+W9mcUNzfcc/6mSw9H38U9rzx4d1ndJ9e27xa3Q0It+QznR1MbHjEfsbL1Bu35XjZflqtYBgPLMwgpZX/9gWEbYqN6gCAxofzVPjKWU1jyU0pos0MnYSddFBQa0rh1nY1lpmjbskSWJgbKOpBJJgy3OFmTjZcedSiQNuxyrDVBKaxxwt6R6g6LeoEglksZ4bozcvnO3PW91zOa8uVY6k8Z4boykM2lpvKxpLIenI8NmAwAwNTmB8dwYAQDN78Pcgznp5mQQU5MTiMdiAIB4LIbpfL4jT1bTnOMsIR6t1edZ7Zy7pCa06E0xbzqfb8OaOt4/4NbqVptSWlN+Jczjn529z83TZgtfv3zm7MHChgODXPxmoWjsHewT1ZeGFL5tXSplADg5/U7CoYhhWsOU3tJRKm1zDYgmE0SELVcq2N3ZRTgUUX5SXQGzsoNOZTJE8/s6YEVbqcj20rEyRjxENr9ZKHLFvT4vUpkMiSYTfxwWkACzYOx3Ur20LLRZKBp6S2+PNb+vw7PdYMWGWDWoZ0uwkllA5ute5NgSweEhaed7FbuubCxKCixLYo9TZg9Zd4HfnhYvptW6srHYHCmw6sXIZkc5WL2lgzZbXIwI7fSUxOY4toSVstlR4vV5ublSadvY29nhLiLAQ9tdYjvZAlu9GFawektHuVLhwGWd7uZTu+6Tw3LZ1U7F3wUAOFhWN0aiEE/BKrabXFlCBRYAjqrHEO0Rj8XgDwSVaysDXw+NdMw56ZYM+tpVv2p5deAfp1Wc1C/aY5WjZaFps4Wj6rFqefce9geCaNbP3KT2lOv6WXNbsNfcnt/hfy1POBJd7TeEU50fVlevPB3wFH/mbj3pN4wTRdbePCTzS8t4fTOQLs8srBiD/sf9hpKJXDRfmX8G/gKUwMkA3my/NwAAAABJRU5ErkJggg==", L3 = {
  AC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%230052B4' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M440.1 181.1c-.1 39.2-6.4 81.4-57.4 101.5-51.1-20.1-57.3-62.3-57.4-101.5h114.8z'/%3e%3cpath fill='%2329DBFF' d='M439.6 197.7c-2.8 34.9-12.4 67.4-57 85-44.4-17.6-54.5-51.2-56.9-84.9'/%3e%3cpath fill='white' d='M437.8 214.1c-3.2 24.3-16.7 53.5-55.1 68.6-38.4-15.1-50.5-42.5-55.1-68.4'/%3e%3cpath fill='%2329DBFF' d='M434.2 230.3c-5.7 17.7-19.3 39.4-51.3 52.8-32-12.6-45.2-33.8-51.4-53'/%3e%3cpath fill='white' d='M426.7 246.9c-6.5 11.3-17.7 25.4-44 35.9-27.5-11.5-37.4-25.3-44-36.1'/%3e%3cpath fill='%2329DBFF' d='M412.4 265.1c-8.1 7.2-12 11.2-29.6 17.9-20.1-7.9-22.6-11.6-29.2-17.5'/%3e%3cpath fill='%235CC85C' d='M383.3 231.6c-.2-.2-27.9 35.7-27.9 35.7-1.8-1.3-10-9.5-13.3-15l41.3-50.1 40.2 49.7c-3.9 6.5-11.4 13.6-13.2 15M382.6 85.3l-26.5 45h53z'/%3e%3cellipse transform='rotate(-82.3 291.431 225.686)' fill='%23F7A226' cx='291.4' cy='225.7' rx='48.7' ry='15.7'/%3e%3cellipse transform='rotate(-68.099 303.087 164.67)' fill='%23DDC7AB' cx='303.1' cy='164.7' rx='11.7' ry='7.2'/%3e%3cellipse transform='rotate(-81.738 291.697 271.697)' fill='%23DDC7AB' cx='291.7' cy='271.7' rx='11.4' ry='3.3'/%3e%3cellipse transform='matrix(.9986 -.05353 .05353 .9986 -13.992 16.424)' fill='%23DDC7AB' cx='299.6' cy='269.4' rx='3.3' ry='11'/%3e%3cellipse transform='rotate(-21.518 314.54 201.06)' fill='%23DDC7AB' cx='314.5' cy='201.1' rx='4.1' ry='13.7'/%3e%3cellipse transform='rotate(-21.518 317.511 178.077)' fill='%23DDC7AB' cx='317.5' cy='178.1' rx='13.7' ry='4.1'/%3e%3cellipse transform='rotate(-7.7 473.781 225.857)' fill='%23F7A226' cx='473.6' cy='225.9' rx='15.7' ry='48.7'/%3e%3cellipse transform='rotate(-21.901 462.057 164.866)' fill='%23DDC7AB' cx='462' cy='164.9' rx='7.2' ry='11.7'/%3e%3cellipse transform='rotate(-8.27 473.27 271.908)' fill='%23DDC7AB' cx='473.4' cy='271.9' rx='3.3' ry='11.4'/%3e%3cellipse transform='matrix(.05353 -.9986 .9986 .05353 171.34 719.998)' fill='%23DDC7AB' cx='465.5' cy='269.6' rx='11' ry='3.3'/%3e%3cellipse transform='rotate(-68.482 450.552 201.247)' fill='%23DDC7AB' cx='450.6' cy='201.2' rx='13.7' ry='4.1'/%3e%3cellipse transform='rotate(-68.482 447.58 178.265)' fill='%23DDC7AB' cx='447.6' cy='178.3' rx='4.1' ry='13.7'/%3e%3cpath fill='%23B0C6CC' d='M373.3 130.3L356.1 155l17.8 26.1H396l4.7-25.4-5.4-25.4z'/%3e%3cpath fill='white' d='M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z'/%3e%3cpath fill='%23D80027' d='M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z'/%3e%3cpath fill='%232E52B2' d='M256 22.7v30.7h-46.1z'/%3e%3cpath fill='%23D80027' d='M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6l-77.8-53.3h22.6l62.5 42.3v11z'/%3e%3c/svg%3e",
  AD: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cstyle/%3e%3cpath fill='%23FFDA44' d='M0 0h513v342H0z'/%3e%3cpath fill='%230052B4' d='M0 0h171v342H0z'/%3e%3cpath fill='%23D80027' d='M342 0h171v342H342zM198.9 113.6H256v64.8h-57.1z'/%3e%3cpath d='M267.6 113.6v64.7m16.6-64.7v64.7m16.6-64.7v64.7' stroke='%23D80027' stroke-width='7'/%3e%3cpath d='M247.4 178.4v64.7m-13.3-64.7v64.7m-13.3-64.6v53.9m-13.7-53.9v47.1' stroke='%23D80027' stroke-width='5'/%3e%3cpath fill='%23FFDA44' d='M199.9 146l27.6-32.4 28.5 32.3-28.1 32.4z'/%3e%3cpath fill='%23BC8B00' d='M182.2 95.9v92.2c0 34.3 27.3 54.2 48.6 64.5-.8 1.4 25.1 8.3 25.1 8.3s25.9-6.9 25.1-8.3c21.4-10.3 48.6-30.1 48.6-64.5V95.9H182.2zm129.9 92.2c0 16.9-10 29.4-32.8 43.9-8.6 5.5-17.5 9-23.3 11-5.8-2-14.7-5.5-23.3-11-22.8-14.5-32.8-28-32.8-43.9v-74.5h112.2v74.5z'/%3e%3cpath fill='%23D80027' d='M264.4 188.9h29.5v8.6h-29.5zm0 17.6h29.5v8.6h-29.5z'/%3e%3c/svg%3e",
  AE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23009e49' d='M0 0h513v114H0z'/%3e%3cpath d='M0 228h513v114H0z'/%3e%3cpath fill='%23ce1126' d='M0 0h171v342H0z'/%3e%3c/svg%3e",
  AF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23DB3E00' d='M0 0h513v342H0z'/%3e%3cpath fill='%23479900' d='M331 0h182v342H331z'/%3e%3cpath d='M0 0h181.8v342H0z'/%3e%3cpath fill='white' d='M256 126.7c-19.4 0-35.2 15.8-35.2 35.2v52.8h70.4v-52.8c0-19.5-15.8-35.2-35.2-35.2z'/%3e%3cpath fill='white' d='M256 84.3c-47.7 0-86.4 38.7-86.4 86.4S208.3 257 256 257s86.4-38.7 86.4-86.4-38.7-86.3-86.4-86.3zm0 157.7c-39.4 0-71.4-32-71.4-71.4 0-39.4 32-71.4 71.4-71.4 39.4 0 71.4 32 71.4 71.4 0 39.5-32 71.4-71.4 71.4z'/%3e%3c/svg%3e",
  AG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath d='M0 0h513v342H0z'/%3e%3cpath fill='%230072c6' d='M88.8 136.5c-2.2 12.9-3.4 26.2-3.4 39.8 0 13.6 1.2 27 3.4 39.8L256 228.3l167.2-12.1c2.2-12.9 3.4-26.2 3.4-39.8s-1.2-27-3.4-39.8'/%3e%3cpath fill='white' d='M423.2 219H88.8c15.8 69.8 84.7 122.3 167.2 122.3S407.4 288.8 423.2 219z'/%3e%3cpath fill='%23FFDA44' d='M365.9 136.5H146.1l44.9-21.1-23.9-43.5 48.8 9.4L222 32l34 36.2L290 32l6.1 49.3 48.8-9.4-23.9 43.5z'/%3e%3cg fill='%23ce1126'%3e%3cpath d='M256.5 342L0 0v342z'/%3e%3cpath d='M513 342V0L256 342z'/%3e%3c/g%3e%3c/svg%3e",
  AI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%2300318b' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M454.8 265.38c7.94-10.93 13.24-24.27 13.24-40.42V104.89a59.754 59.754 0 01-36.02 12.01c-19.64 0-37.07-9.43-48.03-24.01-10.95 14.58-28.39 24.01-48.03 24.01-13.52 0-25.99-4.47-36.02-12v120.06c0 16.16 5.3 29.5 13.24 40.42H454.8z'/%3e%3cpath fill='%238DCCFF' d='M310.23 260.98C332.65 296.96 384 309 384 309s51.35-12.04 73.77-48.02H310.23z'/%3e%3cpath fill='%23D87B00' d='M396.66 172.21c.32 1.42 8.72 10.17 17.56 20.15 1.39 1.57-8.74 12.63-6.91 12.59 4.75-.12 19.27-17.26 19.34 6.65.05 15.94-30 27.51-30 27.51h17.47l.65 14.96s4.97-13.34 7.59-16.57c8.1-9.97 20.18-30.07 34.59-27.1 14.41 2.97-13.66-13.92-13.66-13.92s-5.2-15.19-16.63-16.97c-10.06-1.57-14.29-2.51-26.64-7.3-1.68-.65-3.88-2.32-3.36 0z'/%3e%3cpath fill='%23D87B00' d='M359.69 198.69c1.07-.99 4.46-12.63 8.69-25.28.67-1.99 15.31 1.27 14.35-.3-2.47-4.06-24.58-8.08-3.9-20.08 13.79-8 38.82 12.27 38.82 12.27l-8.72-15.14 12.64-8.03s-14.05 2.35-18.14 1.69c-12.68-2.04-36.13-2.48-40.75-16.45-4.62-13.97-5.25 18.79-5.25 18.79s-10.56 12.08-6.4 22.88c3.66 9.5 4.96 13.64 6.97 26.73.29 1.79-.06 4.53 1.69 2.92z'/%3e%3cpath fill='%23D87B00' d='M395.67 219.87c-1.39-.43-13.16 2.49-26.22 5.18-2.06.42-6.59-13.88-7.47-12.26-2.27 4.17 5.36 25.31-15.41 13.45-13.84-7.91-8.89-39.73-8.89-39.73l-8.71 15.14-13.29-6.9s9.09 10.96 10.57 14.84c4.6 11.99 16 32.49 6.24 43.49-9.76 11.01 18.88-4.9 18.88-4.9s15.76 3.07 23-5.96c6.38-7.94 9.3-11.14 19.61-19.45 1.43-1.12 3.97-2.19 1.69-2.9z'/%3e%3cpath fill='white' d='M256.5 0h-23.1L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1V171h22.6L96 121.8V171h64v-49.2l73.4 49.2h23.1v-22.9l-46.6-30.7h46.6v-64h-46.6l46.6-30.7z'/%3e%3cpath fill='%23D80027' d='M144 0h-32v69.4H0v32h112V171h32v-69.6h112.5v-32H144z'/%3e%3cpath fill='%23D80027' d='M0 171v-11.3l62.5-42.3h22.6L7.3 171zM7.3.1l77.8 53.2H62.5L0 11.1V.1zm249.2 0v11l-63 42.3h-22.6L248.7.1zM248.7 171l-77.8-53.6h22.6l63 42.3V171z'/%3e%3c/svg%3e",
  AL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 60'%3e%3cpath fill='%23ED2024' d='M0 0h90v60H0z'/%3e%3cpath fill='%23212121' d='M32.5 12.2v16l7.1 2.5-5 4.9 2.4 3 5.3-5.5 1.2 2.3-3 4.9 3.6 5.6-1.8 2.6 2.8 3.6 2.7-3.7-1.5-2.6 3-5.8-2.7-4.6 1.2-2.3 5.2 5.5 2.5-2.9-5.2-5.1 7.2-2.6V12.2l-5.2 1.9-.1 3.8-3.3.3v-2.6l1.7-2.3 5.6-2.2-2.3-.4 1.4-1.2.9.4-.8-1.4L54 9l-1-1.1L47.5 9l1.4 1.1-3.8 4.9-3.8-4.8 1.3-1.1-5-1.2L36.2 9l-1.5-.4-.8 1.4.9-.6 1.6 1.1-2.3.5 5.5 2 1.6 2.3v2.9l-3.3-.3v-3.6z'/%3e%3cpath d='M26.2 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM57.4 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM53.4 36.1h6.4V38h-6.4zm-23.2 0h6.4V38h-6.4z' fill='%23212121'/%3e%3c/svg%3e",
  AM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%230052B4' d='M0 0h513v342H0z'/%3e%3cpath fill='%23D80027' d='M0 0h513v114H0z'/%3e%3cpath fill='%23FF9811' d='M0 228h513v114H0z'/%3e%3c/svg%3e",
  AO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath d='M0 171h513v171H0z'/%3e%3cpath fill='%23D80027' class='prefix__st0' d='M0 0h513v171H0z'/%3e%3cg fill='%23FFDA44'%3e%3cpath d='M332.7 135.6l17.5-8.6-7.4-19-18.7 6.2zm-45.6-56l5.5-18.8-19.1-7.2-8 18zm29.4 23.2l12.2-15.3-14.9-13.9-14.2 13.6zm19.4 68.9l19.5-.8v-21.3l-22.9.2zm-12.6 38.1l18.8 5.5 7.3-19-18-8zm-29 32.4l14.9 12.7 14.4-14.4-13.1-14.7zm-47-147.7l9.8 19.9 21.9 3.3-15.9 15.5 3.6 21.9-19.6-10.4-19.7 10.2 3.8-21.9-15.8-15.5 22-3.1z'/%3e%3cpath d='M250.8 61.3l-2.7 18.3c43.1 3.2 77 39.2 77 83.1 0 46-37.3 82.9-83.4 83.4-29.2.3-51.3-14.8-67-33.7l-13.9 12.3c15 19 40.8 39.9 80.9 39.9 56.3 0 101.9-45.6 101.9-101.9.1-53.2-40.7-96.9-92.8-101.4z'/%3e%3cpath fill='black' d='M291.9 223.4l-11.8 14s51.9 38.9 53.6 40.4c1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-2-1.5-51.8-42-51.8-42z'/%3e%3cpath d='M206.1 157.2c-7.7 10.3-7.5 23.1 2.8 30.9 0 0 135.2 101.5 136.9 103 1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-1.9-1.5-149.7-121.5-149.7-121.5zm47.7 99.1l7.3 18.2 19.5-6-4.8-19.1zm-40.4-3.7l-2 19.5 20.1 3.6 4.5-19.1zm-35.7-21.2L167.4 248l16.4 12.1 12.5-15.2z'/%3e%3c/g%3e%3c/svg%3e",
  AR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h512v342H0z'/%3e%3cpath fill='%23338AF3' d='M0 0h512v114H0zm0 228h512v114H0z'/%3e%3ccircle fill='%23FFDA44' stroke='%23d6ab00' stroke-width='5' cx='256.5' cy='171' r='40'/%3e%3c/svg%3e",
  AS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%2310338c' d='M0 0h513v342H0z'/%3e%3cpath fill='%23D80027' d='M513 33L95.3 171 513 310.76v30.57L0 171 513 0z'/%3e%3cpath fill='white' d='M513 287.18v24.58L81.72 171 513 30v24.16'/%3e%3cpath fill='%23A2001D' d='M476.98 140.21l-21.89 10.68-3.18-15.32 31.19-29.77s-9.42-40.65-13.75-44.98l-112.32 55.82-6.84 36.76-31.9 28.59-.4 34.2 34.29-22.76 67.23-2.66-1.51 38.11h22.23l11.9-44.64 31.55-24.61-6.6-19.42z'/%3e%3cpath fill='%23EFC100' stroke='%23231F20' stroke-miterlimit='10' d='M317.89 238.41l-22.24-11.11 22.24-11.11h144.46v22.22z'/%3e%3c/svg%3e",
  AT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 114h513v114H0z'/%3e%3cpath fill='%23D80027' d='M0 0h513v114H0zm0 228h513v114H0z'/%3e%3c/svg%3e",
  AU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%2310338c' d='M0 0h513v342H0z'/%3e%3cg fill='white'%3e%3cpath d='M222.2 170.7c.3-.3.5-.6.8-.9-.2.3-.5.6-.8.9zM188 212.6l11 22.9 24.7-5.7-11 22.8 19.9 15.8-24.8 5.6.1 25.4-19.9-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-48.6-116l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9L332 136zm48.6-66.2l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm42.5 49.7l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.4-7.6-9.5 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zM398 166.5l4.1 12.7h13.3l-10.8 7.8 4.2 12.7-10.8-7.9-10.8 7.9 4.1-12.7-10.7-7.8h13.3z'/%3e%3cpath d='M254.8 0v30.6l-45.1 25.1h45.1V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9H99v-48.6l-87.4 48.6H-1.2v-30.6L44 115H-1.2V55.7h59.1L-1.2 22.8V0h26.7L99 40.8V0h55.6v48.6L242.1 0z'/%3e%3c/g%3e%3cpath fill='%23D80027' d='M142.8 0h-32v69.3h-112v32h112v69.4h32v-69.4h112v-32h-112z'/%3e%3cpath fill='%230052B4' d='M154.6 115l100.2 55.7v-15.8L183 115z'/%3e%3cpath fill='white' d='M154.6 115l100.2 55.7v-15.8L183 115z'/%3e%3cpath d='M154.6 115l100.2 55.7v-15.8L183 115zm-83.9 0l-71.9 39.9v15.8L99 115z' fill='%23D80027'/%3e%3cpath fill='%230052B4' d='M99 55.7L-1.2 0v15.7l71.9 40z'/%3e%3cpath fill='white' d='M99 55.7L-1.2 0v15.7l71.9 40z'/%3e%3cpath d='M99 55.7L-1.2 0v15.7l71.9 40zm84 0l71.8-40V0L154.6 55.7z' fill='%23D80027'/%3e%3c/svg%3e",
  AW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 363 242'%3e%3cpath fill='%23338AF3' d='M0 0h363v242H0z'/%3e%3cpath fill='white' d='M57 96.9L14.7 78.2 57 59.6l18.6-42.2 18.6 42.2 42.3 18.6-42.3 18.7-18.6 42.2z'/%3e%3cpath fill='%23f30028' d='M75.6 40.6l11.5 26.1 26.1 11.5-26.1 11.5-11.5 26.1-11.5-26.1L38 78.2l26.1-11.5z'/%3e%3cpath d='M0 152.2h363v15.7H0zm0 31.4h363v15.7H0z' fill='%23FFDA44'/%3e%3c/svg%3e",
  AX: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%230052B4' d='M0 0h513v342H0z'/%3e%3cpath fill='%23FFDA44' d='M513 210.9H202.2V342h-79.8V210.9H0v-79.8h122.4V0h79.8v131.1H513v61.2z'/%3e%3cpath fill='%23D80027' d='M513 149.7v42.6H183.7V342H141V192.3H0v-42.6h141V0h42.7v149.7z'/%3e%3c/svg%3e",
  AZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23ef3340' d='M0 0h513v342H0z'/%3e%3cpath fill='%2300b5e2' d='M0 0h513v114H0z'/%3e%3cpath fill='%23509e2f' d='M0 228h513v114H0z'/%3e%3cg fill='white'%3e%3cpath d='M265.6 212.6c-23 0-41.6-18.6-41.6-41.6s18.6-41.6 41.6-41.6c7.2 0 13.9 1.8 19.8 5-9.2-9-21.9-14.6-35.8-14.6-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2c13.9 0 26.6-5.6 35.8-14.6-5.9 3.2-12.6 5-19.8 5z'/%3e%3cpath d='M297.6 142.2l5.5 15.5 14.9-7.1-7.1 14.9 15.5 5.5-15.5 5.5 7.1 14.9-14.9-7.1-5.5 15.5-5.5-15.5-14.9 7.1 7.1-14.9-15.5-5.5 15.5-5.5-7.1-14.9 14.9 7.1z'/%3e%3c/g%3e%3c/svg%3e",
  BA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%2310338C' d='M0 0h513.1v342H0z'/%3e%3cpath fill='%23F6C500' d='M99.9 0h342v342'/%3e%3cg fill='white'%3e%3cpath d='M19.9 21.1L40.3 6.2 60.9 21 54 0H26.7z'/%3e%3cpath d='M92.3 25.5L84.4 1.3l-7.8 24.2H51.3l20.5 14.8-7.8 24 20.4-14.8L105 64.3l-7.9-24 20.5-14.9z'/%3e%3cpath d='M136.3 69.2l-7.8-24-7.8 24H95.5l20.4 14.9-7.8 24 20.4-14.8 20.6 14.8-7.8-24 20.4-14.9z'/%3e%3cpath d='M179.4 112.3l-7.8-24.1-7.8 24.1h-25.3l20.5 14.9-7.8 24 20.4-14.8 20.6 14.8-7.9-24 20.5-15z'/%3e%3cpath d='M222.5 155.3l-7.8-24-7.8 24h-25.4l20.6 15-7.8 24 20.4-14.9 20.4 14.9-7.8-24 20.6-15z'/%3e%3cpath d='M265.6 198.4l-7.8-24-7.8 24h-25.4l20.6 14.9-7.8 24.1 20.4-14.9 20.4 14.9-7.8-24.2 20.5-14.8z'/%3e%3cpath d='M308.7 241.5l-7.9-24-7.8 24h-25.3l20.5 14.8-7.9 24.2 20.6-14.9 20.4 14.8-7.8-24.1 20.5-14.8z'/%3e%3cpath d='M351.7 284.6l-7.8-24.2-7.8 24.2h-25.3l20.4 14.8-7.8 24.1 20.5-14.9 20.5 14.9-7.8-24.1 20.4-14.8z'/%3e%3cpath d='M387 303.5l-7.9 24.1-25.3.1 19.8 14.3h26.6l19.9-14.4h-25.3z'/%3e%3c/g%3e%3c/svg%3e",
  BB: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23ffc726' d='M0 0h513v342H0z'/%3e%3cpath d='M0 0h171v342H0zm342 0h171v342H342z' fill='%2300267f'/%3e%3cpath d='M325.74 101.02l-31.97 12.4c-.68 1.35-5.79 7.54-8.18 53.06h-17.05v-60.42L256 78.68l-12.54 27v60.8H226.4c-2.39-45.53-7.8-52.48-8.47-53.84l-31.68-11.63c.15.31 15.4 31.34 15.4 78.01v12.54h41.81v71.07h25.08v-71.07h41.81v-12.54c0-24.13 4.17-44.02 7.68-56.46 3.82-13.57 7.7-21.49 7.74-21.57l-.03.03z'/%3e%3c/svg%3e",
  BD: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 513 342'%3e%3cpath fill='%232d6e41' d='M0 85.331h513v342H0z'/%3e%3ccircle fill='%23F40B32' cx='218.902' cy='256.5' r='115'/%3e%3c/svg%3e",
  BE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23fdda25' d='M0 0h513v342H0z'/%3e%3cpath d='M0 0h171v342H0z'/%3e%3cpath fill='%23ef3340' d='M342 0h171v342H342z'/%3e%3c/svg%3e",
  BF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%233d944f' d='M0 0h513v342H0z'/%3e%3cpath fill='%23ef2b2d' d='M0 0h513v171H0z'/%3e%3cpath fill='%23FFDA44' d='M256 102.6l16.9 52h54.7l-44.2 32.2 16.8 52-44.2-32.1-44.2 32.1 16.8-52-44.2-32.2h54.7z'/%3e%3c/svg%3e",
  BG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%2300966e' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='white' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23d62612' d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  BH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23D80027' d='M0 0h512v341.3H0z'/%3e%3cpath fill='white' d='M222.8 34.3l-85.2 34.2 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1H0V0h137.6z'/%3e%3c/svg%3e",
  BI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h513v342H0z'/%3e%3cpath d='M215.9 170.7L0 314.6V26.8zM513 26.8v287.8L297.1 170.7z' fill='%2347a644'/%3e%3cpath fill='%230052B4' d='M512 26.8L296.1 170.7 512 314.6v26.7h-40.1L256 197.4 40.1 341.3H0v-26.7l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H512z'/%3e%3cpath fill='white' d='M513 26.8L297.1 170.7 513 314.6V342h-40L256 197.4 39 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z'/%3e%3ccircle fill='white' cx='251.6' cy='170.7' r='100.2'/%3e%3cpath d='M251.4 103.6l7.4 12.9h14.8l-7.4 12.8 7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8H244zm38.8 66.7l7.4 12.9h14.8L305 196l7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.9l7.4-12.8-7.4-12.8h14.9zm-77.2 0l7.4 12.9h14.9l-7.4 12.8 7.4 12.8h-14.9l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8h14.8z' fill='%23D80027' stroke='%2347a644' stroke-width='3'/%3e%3c/svg%3e",
  BJ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 513 342'%3e%3cpath fill='%23008751' d='M0 85.333h513v342H0z'/%3e%3cpath fill='%23fcd116' d='M196.666 85.333H513v171H196.666z'/%3e%3cpath fill='%23e8112d' d='M196.666 256H513v171H196.666z'/%3e%3c/svg%3e",
  BL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.33'%3e%3cpath fill='white' d='M0 0h512v341.33H0z'/%3e%3cpath fill='%23E6BC00' d='M157.31 199.76s-9.04 43.93-19.31 40.39c-10.62-3.54-17.53-18.76-17.53-18.76l-14.52 21.24s38.18 8.48 41.01 5.47c1.22-1.14 8.21-15.1 10.34-26.05v-22.29zm-56.13 60.57s-2.48 20.18-1.06 22.66c1.24 2.3 39.48 11.33 39.48 11.33s-24.96 16.46-29.74 20.54L91.8 284.94l-.71-24.61h10.09zm11.33-165.69s39.65 41.6 40.36 45.5c.71 3.72-4.25 3.19-4.25 3.19s-44.79-37.53-49.92-41.07c-5.31-3.55 13.81-7.62 13.81-7.62z'/%3e%3cpath fill='%23ADADAD' d='M99.41 104.73s16.99-.71 16.64-11.51c-.35-10.62-11.15-14.87-19.12-12.39-7.97 2.3-23.01 13.45-13.63 35.05 9.38 21.42 23.37 29.39 26.2 47.8 0 0-5.46 9.86-19.12.35-16.9-11.77-6.2-38.24-10.44-44.96-4.25-7.08-40.95-38.92-40.95-38.92s-30.24 39.37-18 74.92c16.95 49.21 51.74 31.98 64.61 36.76 0 0-42.13 61.96-49.57 67.09 0 0 24.08 8.32 47.8-18.76 0 0 5.84 9.74 7.08 20.18h10.27c4.78-26.2 51.51-64.26 49.92-82.32-1.77-21.25-49.21-49.39-51.69-73.29z'/%3e%3cpath fill='%23E6BC00' d='M359.17 201.27s8.96 42.43 19.23 38.89c10.62-3.54 17.53-18.76 17.53-18.76l14.52 21.24s-37 8.48-39.83 5.47c-1.21-1.14-9.32-13.79-11.52-24.66l.07-22.18zm56.05 59.06s2.48 20.18 1.06 22.66c-1.24 2.3-39.48 11.33-39.48 11.33s24.96 16.46 29.74 20.54l18.06-29.92.71-24.61h-10.09zM403.89 94.64s-39.65 41.6-40.36 45.5c-.71 3.72 4.25 3.19 4.25 3.19s44.79-37.53 49.92-41.07c5.14-3.55-13.81-7.62-13.81-7.62z'/%3e%3cpath fill='%23125ECC' d='M157.31 87.06H359.1v145.46c0 16.06-9.69 21.39-21.91 31.85l-45.92 39.41c-18.25 15.62-47.91 15.57-66.07 0l-46.01-39.43c-12.08-10.35-21.88-15.71-21.88-31.82V87.06z'/%3e%3cpath fill='%23FFE600' d='M200.55 147.71c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65-3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zM214.96 274.43c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c.01 7.96-6.45 14.41-14.41 14.41zm43.24 14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c0 7.95-6.45 14.41-14.41 14.41zm43.24-14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z'/%3e%3cpath fill='%23D60537' d='M157.31 175.36H359.1v57.65H157.31v-57.65z'/%3e%3cpath fill='%23EACE00' d='M142.9 43.82s57.65-14.41 115.31-14.41 115.31 14.41 115.31 14.41l-14.41 57.65s-50.45-14.41-100.89-14.41-100.89 14.41-100.89 14.41L142.9 43.82z'/%3e%3cpath fill='%237A6920' d='M258.2 72.65c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 5c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm-115.3 0c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z'/%3e%3cpath fill='%23ADADAD' d='M365.08 178.02c-1.59 18.06 45.14 56.12 49.92 82.32h10.27c1.24-10.44 7.08-20.18 7.08-20.18 23.72 27.09 47.8 18.76 47.8 18.76-7.44-5.13-49.57-67.09-49.57-67.09 12.88-4.78 47.67 12.45 64.61-36.76 12.24-35.55-18-74.92-18-74.92s-36.7 31.84-40.95 38.92c-4.25 6.73 6.46 33.2-10.44 44.96-13.66 9.51-19.12-.35-19.12-.35 2.83-18.41 16.82-26.38 26.2-47.8 9.38-21.6-5.66-32.75-13.63-35.05-7.97-2.48-18.76 1.77-19.12 12.39-.35 10.8 16.64 11.51 16.64 11.51-2.48 23.9-49.92 52.04-51.69 73.29z'/%3e%3ccircle fill='white' cx='258.2' cy='204.19' r='16.93'/%3e%3c/svg%3e",
  BM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23c8102e' d='M0 0h513v342H0z'/%3e%3cpath fill='%23012169' d='M0 .1h256.5v171H0z'/%3e%3cpath fill='white' d='M256 0h-22.6L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1v22.6h22.6L96 121.8v48.9h64v-48.9l73.4 48.9H256v-22.6l-46.1-30.7H256v-64h-46.1L256 22.7z'/%3e%3cpath fill='%23c8102e' d='M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z'/%3e%3cpath fill='%23c8102e' d='M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6l-77.8-53.3h22.6l62.5 42.3v11z'/%3e%3cg transform='translate(13 5)'%3e%3cpath fill='white' d='M303.9 94.94v99.69c0 59.81 79.75 99.69 79.75 99.69s79.75-39.88 79.75-99.69V94.94H303.9z'/%3e%3cpath fill='%232F8F22' d='M436.37 254.44H330.93c23.13 25.08 52.72 39.88 52.72 39.88s29.59-14.8 52.72-39.88z'/%3e%3ccircle fill='%2365B5D2' cx='383.65' cy='214.56' r='39.88'/%3e%3ccircle fill='%23c8102e' cx='343.77' cy='194.63' r='19.94'/%3e%3ccircle fill='%23c8102e' cx='423.52' cy='194.63' r='19.94'/%3e%3ccircle fill='%23c8102e' cx='383.65' cy='154.75' r='19.94'/%3e%3c/g%3e%3c/svg%3e",
  BN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.33'%3e%3cpath fill='%23FFDA44' d='M0 0h512v341.33H0z'/%3e%3cpath d='M0 193.74l512 127.19V214.26L0 97.08z'/%3e%3cpath fill='white' d='M512 234.26v-86.67L0 20.41v86.67'/%3e%3cg fill='%23D80027' stroke='%23231F20' stroke-width='3' stroke-miterlimit='10'%3e%3cpath d='M306.4 134.01a50.28 50.28 0 016.07 24.02c0 21.55-13.51 39.94-32.52 47.19v-59.51c5.7-1.19 10-6.37 10-12.59 6.9 0 12.5-5.75 12.5-12.85h-.42c6.9 0 12.91-5.75 12.91-12.85h-34.99V76.58l-14.99-27.71-15 27.71v30.84h-34.99c0 7.1 6.01 12.85 12.91 12.85h-.42c0 7.1 5.6 12.85 12.5 12.85 0 6.22 4.29 11.4 9.99 12.59v61.37c-22.09-5.39-38.48-25.3-38.48-49.05 0-8.7 2.2-16.88 6.07-24.02-10.96 11.21-17.72 26.53-17.72 43.44 0 34.32 27.82 62.15 62.15 62.15s62.15-27.83 62.15-62.15c0-16.91-6.77-32.24-17.72-43.44z'/%3e%3cpath d='M198.46 226.81s20.69 27.71 66.5 27.71 66.5-27.71 66.5-27.71l13.47 28.37s-21.03 27.71-79.97 27.71-79.97-27.71-79.97-27.71l13.47-28.37zm-69.22-93.63h20.88l24.93 27.26v73.45h-26.28v-68.37zm270.76 0h-20.88l-24.93 27.26v73.45h26.27v-68.37z'/%3e%3c/g%3e%3c/svg%3e",
  BO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23d52b1e' d='M0 0h513v114H0z'/%3e%3cpath fill='%23f9e300' d='M0 114h513v114H0z'/%3e%3cpath fill='%23007934' d='M0 228h513v114H0z'/%3e%3c/svg%3e",
  BQ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%23012a87' d='M0 341.3h512V0z'/%3e%3cpath fill='%23f9d90f' d='M250.4 0H0v166.9z'/%3e%3cpath fill='%23dc171d' d='M140.4 118.3l12.2 21.2h24.5l-12.3 21.1 12.3 21.2h-24.5L140.4 203l-12.2-21.2h-24.5l12.3-21.2-12.3-21.1h24.5z'/%3e%3ccircle fill='none' stroke='black' stroke-width='9' stroke-miterlimit='10' cx='140.4' cy='160.6' r='57.7'/%3e%3c/svg%3e",
  BR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23009b3a' d='M0 0h513v342H0z'/%3e%3cpath fill='%23fedf00' d='M256.5 19.3l204.9 151.4L256.5 322 50.6 170.7z'/%3e%3ccircle fill='white' cx='256.5' cy='171' r='80.4'/%3e%3cpath fill='%23002776' d='M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zm119 20.3c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z'/%3e%3c/svg%3e",
  BS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23ffc72c' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z' fill='%2300778b'/%3e%3cpath d='M256 256.006L0 426.668V85.331z'/%3e%3c/svg%3e",
  BT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23FF7415' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%23FFDA44' d='M512 0H0v341.3'/%3e%3cpath fill='none' stroke='white' stroke-width='42' stroke-miterlimit='10' d='M128.7 255.5s35 54 67.3 32.4c56.9-37.9-68.9-108.6-2.9-152.6 58.3-38.8 76.6 103.5 137.6 62.8 59-39.3-64.7-111.4-9.2-148.4 33.4-22.2 67.1 32.6 67.1 32.6'/%3e%3c/svg%3e",
  BW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 238h513v104H0zM0 0h513v104H0z' fill='%236da9d2'/%3e%3cpath d='M0 125.5h513v89.656H0z'/%3e%3c/svg%3e",
  BY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23007C30' d='M0 0h513v342H0z'/%3e%3cpath fill='%23CE1720' d='M0 230h513V0H0'/%3e%3cpath fill='white' d='M100 230V0H0v342h513-413z'/%3e%3cpath d='M28 159.6L8.6 128.2 28 97.4l19.3 30.8zm44.6 0l-19.3-31.4 19.3-30.8L92 128.2zM28 241.2L8.6 209.8 28 179l19.3 30.8zm44.6 0l-19.3-31.4L72.6 179 92 209.8z' fill='%23CE1720'/%3e%3cpath d='M28 73.8l-16.1-26L28 22.2l16 25.6zm44.6 0l-16-26 16-25.6 16.1 25.6zM28 318l-16.1-26.1L28 266.3l16 25.6zm44.6 0l-16-26.1 16-25.6 16.1 25.6z' fill='none' stroke='%23CE1720' stroke-width='7'/%3e%3c/svg%3e",
  BZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23003e87' d='M0 0h512v341.3H0z'/%3e%3ccircle fill='white' cx='260.9' cy='170.9' r='118.9'/%3e%3ccircle fill='none' stroke='%236DA544' stroke-width='18' stroke-miterlimit='10' cx='261.9' cy='173.1' r='94.5'/%3e%3cg stroke='black'%3e%3cpath fill='%23003e87' d='M261.9 151.5l-50.6 23.4v20c0 11.8 6.1 22.8 16.2 28.9L262 239l34.5-15.2c10-6.2 16.2-17.1 16.2-28.9v-20l-50.8-23.4z'/%3e%3cpath fill='%23FFDA44' d='M211.3 128.1h101.3v46.7H211.3z'/%3e%3c/g%3e%3cpath d='M0 0h512v35H0zm0 306h512v35H0z' fill='%23ce1127'/%3e%3c/svg%3e",
  CA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 0h142v342H0zm371 0h142v342H371zm-64.5 206l50.4-25.2-25.2-12.6V143l-50.4 25.2 25.2-50.4h-25.2L256.1 80l-25.2 37.8h-25.2l25.2 50.4-50.4-25.2v25.2l-25.2 12.6 50.4 25.2-12.6 25.2h50.4V269h25.2v-37.8h50.4z' fill='red'/%3e%3c/svg%3e",
  CC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='green' d='M0 0h512v341.3H0z'/%3e%3cpath d='M422.7 252.4l6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.2V301l-11.1-8.9-11.1 8.9v-14.2l-13.8-3.2 11.1-8.8-6.2-12.8 13.9 3.2zm-46.6-136.3l6.2 12.9 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.1v14.3l-11.1-8.9-11.1 8.9.1-14.3-13.9-3.1 11.1-8.8-6.2-12.8L370 129zm37-77.8l6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.9-13.9 3.1v14.2L413.1 78 402 86.9l.1-14.2-13.9-3.1 11.1-8.9-6.2-12.8 13.9 3.2zm51.8 58.4l6.2 12.8 13.9-3.2-6.3 12.8 11.2 8.9-13.9 3.1.1 14.2-11.2-8.9-11.1 8.9.1-14.2L440 128l11.2-8.9-6.3-12.8 13.9 3.2zm-28 68.1l4.9 14.8h15.6l-12.6 9.2 4.8 14.9-12.7-9.2-12.6 9.2 4.8-14.9-12.6-9.2h15.6zM306.8 254.7c-49.2 0-89.1-39.9-89.1-89.1s39.9-89.1 89.1-89.1c15.3 0 29.8 3.9 42.4 10.7C329.4 67.9 302.3 56 272.5 56c-60.5 0-109.6 49.1-109.6 109.6S212 275.3 272.5 275.3c29.8 0 56.9-11.9 76.6-31.3-12.6 6.8-27 10.7-42.3 10.7zM140.4 59.5C129.7 41 109.7 28.6 86.8 28.6S44 41 33.3 59.5h107.1zm.2.4l-53.8 53.8-53.7-53.8C28 68.9 25 79.3 25 90.5c0 34.2 27.7 61.9 61.9 61.9s61.9-27.7 61.9-61.9c-.1-11.2-3.1-21.6-8.2-30.6z' fill='%23FFDA44'/%3e%3cpath fill='%23A2001D' d='M71.4 98.2v52.2c4.9 1.3 10.1 1.9 15.5 1.9s10.5-.7 15.5-1.9V98.2h-31z'/%3e%3c/svg%3e",
  CD: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23338AF3' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%23FFDA44' d='M512 66.9V0H411.7L0 274.4v66.9h100.3z'/%3e%3cpath fill='%23D80027' d='M512 0v40.1L60.2 341.3H0v-40.1L451.8 0z'/%3e%3cpath fill='%23FFDA44' d='M93.6 31.2l16.3 50.4H163l-42.9 31.2 16.4 50.5-42.9-31.2-43 31.2L67 112.8 24.1 81.6h53.1z'/%3e%3c/svg%3e",
  CF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23d21034' d='M0 0h512v341.3H0z'/%3e%3cpath d='M0 170.7h211.5V256H0zm300.5 0H512V256H300.5z' fill='%233a9927'/%3e%3cpath fill='%23003082' d='M0 0v85.3h211.5V0h89v85.3H512V0z'/%3e%3cpath d='M300.5 85.3H512v85.3H300.5zM0 85.3h211.5v85.3H0z' fill='white'/%3e%3cpath d='M300.5 341.3h-89V256H0v85.3h512V256H300.5zM105.7 8.6l8.6 26.2h27.5L119.5 51l8.6 26.2L105.7 61 83.4 77.2 91.9 51 69.6 34.8h27.6z' fill='%23ffce00'/%3e%3c/svg%3e",
  CG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 513 342'%3e%3cpath fill='%23da1a35' d='M0 85.331h513v342H0z'/%3e%3cpath fill='%23009543' d='M443.726 85.331L102.4 426.657H0V85.331z'/%3e%3cpath fill='%23fbde4a' d='M500.124 85.331L158.798 426.657H11.876L353.202 85.331z'/%3e%3c/svg%3e",
  CH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 513 342'%3e%3cpath fill='red' d='M0 85.337h513v342H0z'/%3e%3cpath fill='white' d='M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z'/%3e%3c/svg%3e",
  CI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.326H0z'/%3e%3cpath fill='%23009e60' d='M330.207 85.331H512v341.337H330.207z'/%3e%3cpath fill='%23f77f00' d='M0 85.331h181.793v341.337H0z'/%3e%3c/svg%3e",
  CK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 513 342'%3e%3cpath fill='%2301237a' d='M0 85.332h513v342H0z'/%3e%3cpath d='M384 156.705l5.283 16.254h17.089l-13.826 10.045 5.281 16.254L384 189.211l-13.825 10.047 5.28-16.254-13.825-10.045h17.089zm-70.209 29.081l15.228 7.758 12.084-12.083-2.673 16.879 15.227 7.759-16.879 2.673-2.674 16.88-7.76-15.227-16.878 2.673 12.086-12.084zm-29.081 70.209l16.254-5.281.001-17.089 10.044 13.825 16.254-5.282-10.046 13.827 10.046 13.826-16.254-5.28-10.044 13.825v-17.09zm29.081 70.209l7.759-15.229-12.084-12.084 16.881 2.674 7.757-15.227 2.674 16.879 16.879 2.672-15.227 7.759 2.673 16.882-12.084-12.087zM384 355.284l-5.281-16.253h-17.091l13.827-10.045-5.28-16.254L384 322.776l13.827-10.044-5.281 16.254 13.826 10.045h-17.089zm70.209-29.08l-15.229-7.758-12.083 12.084 2.673-16.882-15.227-7.756 16.879-2.675 2.675-16.879 7.756 15.227 16.881-2.674-12.086 12.085zm29.081-70.209l-16.254 5.281v17.09l-10.045-13.826-16.254 5.281 10.046-13.826-10.046-13.827 16.254 5.282 10.045-13.825v17.089zm-29.081-70.207l-7.757 15.226 12.082 12.084-16.881-2.673-7.756 15.227-2.675-16.88-16.879-2.675 15.227-7.757-2.673-16.878 12.084 12.082zM0 186.665v16h46.069L0 233.377v7.539l57.377-38.252H80L0 255.998h112v-69.334H0zm96 69.331H22.628L96 207.083v48.913zm80-117.331l80-53.334H144v69.334h112v-16h-46.069L256 107.951v-7.539l-57.377 38.251H176v.002zm-16-53.332h73.372L160 134.246V85.333zm-16 170.665h112l-80-53.334h22.623L256 240.917v-7.539l-46.069-30.713H256v-16H144v69.333zm16-48.915l73.372 48.913H160v-48.913zM112 85.331H0l80 53.334H57.377L0 100.413v7.539l46.069 30.712H0v16h112V85.331zm-16 48.915L22.628 85.333H96v48.913z' fill='white'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144 85.331h-32v69.334H0v32h112v69.333h32v-69.333h112v-32H144z'/%3e%3cpath d='M80 138.665L0 85.331v15.082l57.377 38.252zm96 0h22.623L256 100.413V85.331zm-118.623 64L0 240.917v15.081l80-53.333zm118.623 0l80 53.333v-15.081l-57.377-38.252z'/%3e%3c/g%3e%3c/svg%3e",
  CL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M196 0h317v171H196z'/%3e%3cpath fill='%230037A1' d='M0 0h196v171H0z'/%3e%3cpath fill='white' d='M98 24.5L113.1 71H162l-39.6 28.7 15.2 46.5L98 117.5l-39.6 28.7 15.2-46.5L34 71h48.9z'/%3e%3c/svg%3e",
  CM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23ce1126' d='M0 0h513v342H0z'/%3e%3cpath fill='%23007a5e' d='M0 0h171v342H0z'/%3e%3cpath d='M342 0h171v342H342zm-86 102.2l17.2 53H329L283.9 188l17.2 53-45.1-32.7-45.1 32.7 17.2-53-45.1-32.8h55.8z' fill='%23fcd116'/%3e%3c/svg%3e",
  CN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h513v342H0z'/%3e%3cpath d='M226.8 239.2l-9.7-15.6-17.9 4.4 11.9-14.1-9.7-15.6 17.1 6.9 11.8-14.1-1.3 18.4 17.1 6.9-17.9 4.4zM290.6 82l-10.1 15.4 11.6 14.3-17.7-4.8-10.1 15.5-1-18.4-17.7-4.8 17.2-6.6-1-18.4 11.6 14.3zm-54.4-56.6l-2 18.3 16.8 7.6-18 3.8-2 18.3-9.2-16-17.9 3.8 12.3-13.7-9.2-15.9 16.8 7.5zm56.6 136.4l-14.9 10.9 5.8 17.5-14.9-10.8-14.9 11 5.6-17.6-14.9-10.7 18.4-.1 5.6-17.6 5.8 17.5zM115 46.3l17.3 53.5h56.2l-45.4 32.9 17.3 53.5-45.4-33-45.5 33 17.4-53.5-45.5-32.9h56.3z' fill='%23FFDA44'/%3e%3c/svg%3e",
  CO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 343.096h512v83.567H0z'/%3e%3cpath fill='%230052B4' d='M0 256h512v87.096H0z'/%3e%3c/svg%3e",
  CR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 211.473h512v89.043H0z'/%3e%3cpath d='M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z' fill='%230052B4'/%3e%3c/svg%3e",
  CU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23FF9811' d='M0-40.8v422.9-211.4z'/%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath d='M0 0h512v68.3H0zm0 136.5h512v68.3H0zm0 136.6h512v68.3H0z' fill='%230052B4'/%3e%3cpath fill='%23D80027' d='M256 170.7L0 341.3V0z'/%3e%3cpath fill='white' d='M86.5 111.4l12.7 39.2h41.3l-33.4 24.2 12.8 39.3-33.4-24.2-33.4 24.2 12.8-39.3-33.4-24.2h41.2z'/%3e%3c/svg%3e",
  CV: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23003893' d='M0 0h513v342H0z'/%3e%3cpath fill='%23cf2027' d='M0 182.2h513v41.4H0z'/%3e%3cpath fill='white' d='M0 140.8h513v41.4H0zm0 82.8h513V265H0z'/%3e%3cpath d='M150.4 70l6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13.1-17.9 13.1 6.8-21.1-17.9-13.1h22.2zm0 209.7l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13h22.2zm-97.6-70.9l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13H46zM90.1 91l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-18-13h22.3zm-66.3 71H46l6.8-21.1 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13-17.9 13 6.8-21.1zm48.4 148.9l6.8-21.1-18-13h22.3l6.8-21.2 6.9 21.2h22.2l-18 13 6.9 21.1-18-13zM248 208.8l-6.9 21.1h-22.2l18 13-6.9 21.2 18-13.1 18 13.1-6.9-21.2 18-13h-22.2zM210.7 91l-6.8 21.1h-22.2l17.9 13-6.8 21.2 17.9-13.1 18 13.1-6.9-21.2 18-13h-22.2zm66.4 71h-22.2l-6.9-21.1-6.9 21.1h-22.2l18 13.1-6.9 21.1 18-13 18 13-6.9-21.1zm-48.4 148.9l-6.9-21.1 18-13h-22.2l-6.9-21.2-6.8 21.2h-22.2l17.9 13-6.8 21.1 17.9-13z' fill='%23f7d116' stroke='black'/%3e%3c/svg%3e",
  CW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23002b7f' d='M0 0h513v342H0z'/%3e%3cpath fill='%23f9e814' d='M0 233.5h513v51H0z'/%3e%3cpath d='M168.7 86.5l12.9 39.8h41.8l-33.8 24.5 12.9 39.7-33.8-24.5-33.8 24.5 12.9-39.7-33.8-24.5h41.8zm-83.3-54l7.8 23.9h25L97.9 71.1l7.8 23.8-20.3-14.7-20.3 14.7 7.8-23.8-20.3-14.7h25.1z' fill='white'/%3e%3c/svg%3e",
  CX: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%230021ad' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%231c8a42' d='M0 0h512v341.3'/%3e%3cpath d='M77.6 272l5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9V317l-10.3-8.3-10.2 8.3v-13.2l-12.8-2.9 10.3-8.1-5.8-11.9 12.9 3zm-37.1-98.9l5.7 11.9 12.8-3-5.7 11.8 10.3 8.2-12.9 2.9.1 13.2-10.3-8.3-10.3 8.3.1-13.2-12.9-2.9 10.4-8.2L22 182l12.8 3zm37.1-80.9l5.7 11.8 12.8-2.9-5.7 11.8 10.3 8.2-12.8 2.9v13.1l-10.3-8.2-10.2 8.2V124l-12.8-2.9 10.3-8.2-5.8-11.8L72 104zm46.1 62.9l5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9v13.2l-10.3-8.2-10.2 8.2v-13.2l-12.8-2.9 10.3-8.1-5.7-11.9 12.8 3zm-32.9 54l4.4 13.7h14.5L98 231.3l4.5 13.7-11.7-8.4-11.7 8.4 4.5-13.7-11.7-8.5h14.4z' fill='white'/%3e%3ccircle fill='%23ffc639' cx='267.1' cy='170.7' r='74.5'/%3e%3cpath fill='%231c8a42' d='M267.1 220.3h24.8s10.8-19 0-37.2l24.8-24.8-12.4-24.8h-12.4s-6.2 18.6-31 18.6-31-18.6-31-18.6h-12.4l12.4 24.8-12.4 24.8 12.4 12.4s12.4-24.8 37.2-12.4c0 0 10.5 15.5 0 37.2z'/%3e%3cpath fill='%23ffc639' d='M464.4 92.2c.6-2.9-.2-17.6-.2-20.7 0-21.3-13.9-39.4-33.2-45.7 5.9 12 9.2 25.4 9.2 39.7 0 4.8-.4 9.5-1.1 14.1-2.9-4.7-6.6-8.9-11.2-12.6-17.1-13.6-40.6-14-57.9-2.5 13.4 2.9 26.3 8.9 37.7 18 9 7.1 16.2 16.8 21.7 26.1 0 0-17.8 10.9-31 15.1s-42.3 7.9-42.3 7.9c72 12 132-36 132-36-6.5-13.4-15.8-4-23.7-3.4z'/%3e%3c/svg%3e",
  CY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23DB7D00' d='M141.7 154.7s.2 67.1 74.7 65.3l4.5 13.9h8.9s-7.4-41.1 60.1-41.5c0 0 0-27.6 27.6-27.6H359s-66-51.8 58.9-118l1.8-13.1s-129.9 71-198.9 57.2c0 0 10.7 42.5-10.8 42.5-10.8 0-9.7-8.1-32.3-8.1-18.7 0-17.3 19.7-26.3 19.5-8.9-.2-18.8-12.3-19.6-10.2-.7 2.1 9.9 20.1 9.9 20.1z'/%3e%3cg fill='%23006651'%3e%3cpath d='M237.2 308.1c6.9-5 13-6.6 22.4-8.3s19.4-4.4 24.6-5.8-17.7 6.6-23.5 8.3c-5.8 1.6-23.5 5.8-23.5 5.8zm37.9-14.7c-1.9-11.9 2.8-24.3 13.5-29.3 2.5 8.6-5.2 23.2-13.5 29.3zm18.2-6.2c-5.8-9.8 4-22.6 11.1-28.8 3.3 6-2.5 23.7-11.1 28.8zm16.9-7.6c-6.2-8.4 1.1-23.2 8.8-29 3.1 8.2.1 23.2-8.8 29zm16.9-10.6c-5.6-8-1.7-20.4 6.3-28.4 5.8 6.6.9 21-6.3 28.4zm13.5-10.7c-4.7-7.5 1.1-25.4 8.6-30.4 3.3 6.6.8 25.4-8.6 30.4zm10.8-2.8c-1.4-10.8 17.4-22.7 25.2-22.4-.9 8.9-8.9 18.6-25.2 22.4zm-10.5 12.2c8.8-9.1 26-9.1 32.1-7.2-1.7 5.3-21.9 16.9-32.1 7.2z'/%3e%3cpath d='M328.7 276.8c12.4-3.3 20.5-6.1 27.9 1.7-5.2 6.6-25.4 4.7-27.9-1.7zm-17.7 8c11.9-6.4 26.3 3 28.5 8.6-13.3 5.5-28.7-7.2-28.5-8.6zm-16.3 9.2c10.8-4.1 23.2 1.4 28.2 7.5-5.8 2.7-21 5.7-28.2-7.5zm-14.9 4.7c12.4-1.4 24.4 8 27 13.4-15.9 1.5-22-3.2-27-13.4zm-4 9.4c-6.9-5-13-6.6-22.4-8.3-9.4-1.7-19.4-4.4-24.6-5.8-5.3-1.4 17.7 6.6 23.5 8.3 5.8 1.6 23.5 5.8 23.5 5.8zm-37.9-14.7c1.9-11.9-2.8-24.3-13.5-29.3-2.5 8.6 5.2 23.2 13.5 29.3zm-18.2-6.2c5.8-9.8-4-22.6-11.1-28.8-3.3 6 2.5 23.7 11.1 28.8zm-16.9-7.6c6.2-8.4-1.1-23.2-8.8-29-3.1 8.2-.1 23.2 8.8 29zM185.9 269c5.6-8 1.7-20.4-6.3-28.4-5.8 6.6-.9 21 6.3 28.4zm-13.5-10.7c4.7-7.5-1.1-25.4-8.6-30.4-3.3 6.6-.8 25.4 8.6 30.4zm-10.8-2.8c1.4-10.8-17.4-22.7-25.2-22.4.9 8.9 8.9 18.6 25.2 22.4zm10.5 12.2c-8.8-9.1-26-9.1-32.1-7.2 1.7 5.3 21.9 16.9 32.1 7.2z'/%3e%3cpath d='M184.3 276.8c-12.4-3.3-20.5-6.1-27.9 1.7 5.2 6.6 25.4 4.7 27.9-1.7zm17.7 8c-11.9-6.4-26.3 3-28.5 8.6 13.3 5.5 28.7-7.2 28.5-8.6zm16.3 9.2c-10.8-4.1-23.2 1.4-28.2 7.5 5.8 2.7 21 5.7 28.2-7.5zm14.9 4.7c-12.4-1.4-24.4 8-27 13.4 15.9 1.5 22-3.2 27-13.4z'/%3e%3c/g%3e%3c/svg%3e",
  CZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%2311457e' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23d7141a' d='M512 256v170.663H0L215.185 256z'/%3e%3cpath fill='white' d='M512 85.337V256H215.185L0 85.337z'/%3e%3c/svg%3e",
  DE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.331h512v341.337H0z'/%3e%3cpath d='M0 85.331h512v113.775H0z'/%3e%3cpath fill='%23FFDA44' d='M0 312.882h512v113.775H0z'/%3e%3c/svg%3e",
  DJ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%2312ad2b' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%236ab2e7' d='M512 0v166.7L0 170.8V0z'/%3e%3cpath fill='white' d='M256 170.7L0 341.3V0z'/%3e%3cpath fill='%23d7141a' d='M89.8 92.5l17 52.4H162l-44.6 32.5 17 52.4-44.6-32.4-44.6 32.4 17-52.4-44.6-32.5h55.2z'/%3e%3c/svg%3e",
  DK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23c60c30' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M190 0h-60v140H0v60h130v142h60V200h323v-60H190z'/%3e%3c/svg%3e",
  DM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23496E2D' d='M0 0h512v341.3H0z'/%3e%3cpath d='M0 110.7v120h512v-120z'/%3e%3cpath fill='%23FFDA44' d='M0 110.7h512v40H0z'/%3e%3cpath fill='white' d='M0 190.7h512v40H0z'/%3e%3cpath d='M196 0h120v341.3H196z'/%3e%3cpath fill='%23FFDA44' d='M196 0h40v341.3h-40z'/%3e%3cpath fill='white' d='M274.7 0h40v341.3h-40z'/%3e%3ccircle fill='%23D80027' cx='256' cy='170.7' r='123.1'/%3e%3cpath d='M256 58.6l4.6 14.2h15l-12.1 8.9 4.6 14.2-12.1-8.8-12.1 8.8 4.6-14.2-12.1-8.9h15zM190.1 80l12.2 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15l-4.6 14.2-4.7-14.2h-15l12.1-8.8zm-40.7 56h15l4.6-14.2 4.7 14.2h15l-12.2 8.8 4.7 14.3-12.2-8.8-12.1 8.8 4.6-14.3zm0 69.3l12.1-8.8-4.6-14.3L169 191l12.2-8.8-4.7 14.3 12.2 8.8h-15l-4.7 14.3-4.6-14.3zm40.7 56.1l4.6-14.3-12.1-8.8h15l4.7-14.3 4.6 14.3h15l-12.1 8.8 4.6 14.3-12.1-8.9zm65.9 21.4l-4.6-14.3h-15l12.1-8.8-4.6-14.3 12.1 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15zm65.9-21.4l-12.2-8.9-12.1 8.9 4.6-14.3-12.1-8.8h15l4.6-14.3 4.7 14.3h15l-12.1 8.8zm40.7-56.1h-15l-4.6 14.3-4.7-14.3h-15l12.2-8.8-4.7-14.3L343 191l12.1-8.8-4.6 14.3zm0-69.3l-12.1 8.8 4.6 14.3-12.1-8.8-12.2 8.8 4.7-14.3-12.2-8.8h15l4.7-14.2 4.6 14.2zm-40.7-56l-4.6 14.3 12.1 8.8h-15l-4.7 14.2-4.6-14.2h-15l12.1-8.8-4.6-14.3 12.1 8.8zM279.3 168.7c-11-21.1-14.5-25.1-14.5-25.1s.4-9.7.4-15.6c0-8.8-7.4-15.8-16.5-15.8-8.6 0-15.7 2.9-16.5 11-4.2.9-8.6 4.1-8.6 10.7 0 4.8 1 7.3 5.2 9.3 2.1-4.6 4.3-4.8 9.3-6.4.8.6 1.7 3 2.6 3.4l.3 1s-13.3 6.6-13.3 30.9c0 29.5 22 45.4 22 45.4l-1.8.3-1.9 7.1h22v-7.2l11 17.5c.3-.3 10.2-47.6.3-66.5z' fill='%23496E2D'/%3e%3c/svg%3e",
  DO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%23D80027' d='M0 215.2h211.5v126.1H0z'/%3e%3cpath fill='%230052B4' d='M0 0h211.5v126.2H0z'/%3e%3cpath fill='%23D80027' d='M300.5 0H512v126.2H300.5z'/%3e%3cpath fill='%230052B4' d='M300.5 215.2H512v126.1H300.5z'/%3e%3cg stroke='white' stroke-width='5' stroke-miterlimit='10'%3e%3cpath fill='%230052B4' d='M256 130h-49.9v49.4s19.5 6 49.9 6V130z'/%3e%3cpath fill='%23D80027' d='M206.1 179.4v6c0 27.5 22.3 49.9 49.9 49.9v-49.9c-30.4 0-49.9-6-49.9-6z'/%3e%3cpath fill='%230052B4' d='M256 235.3c27.5 0 49.9-22.3 49.9-49.9v-6s-19.5 6-49.9 6v49.9z'/%3e%3cpath fill='%23D80027' d='M256 130v55.4c30.4 0 49.9-6 49.9-6V130H256z'/%3e%3c/g%3e%3c/svg%3e",
  DZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%2341662E' d='M0 0h512v341.3H0z'/%3e%3cpath fill='white' d='M256 0h256v341.3H256z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M341.5 105.3l-29.4 40.4-47.5-15.4 29.4 40.4-29.4 40.4 47.5-15.4 29.4 40.4v-50l47.5-15.5-47.5-15.4z'/%3e%3cpath d='M309.9 276.7c-58.5 0-106-47.5-106-106s47.5-106 106-106c18.3 0 35.4 4.6 50.4 12.7-23.5-23-55.7-37.2-91.2-37.2-72 0-130.4 58.4-130.4 130.4S197.1 301 269.1 301c35.5 0 67.7-14.2 91.2-37.2-14.9 8.2-32.1 12.9-50.4 12.9z'/%3e%3c/g%3e%3c/svg%3e",
  EC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23FFDA44' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%230052B4' d='M0 170.7h512V256H0z'/%3e%3cpath fill='%23D80027' d='M0 256h512v85.3H0z'/%3e%3ccircle fill='%23FFDA44' cx='256' cy='170.7' r='59.4'/%3e%3cpath fill='%234C1F00' d='M369.2 79.9s-27.2-13.8-33.9-16c-6.7-2.2-49.1-13.2-49.1-7 0 10.3-13.5 12-15.5 12s-2-5.3-14.8-5.3-13.7 4.8-15.8 4.8c-2.2 0-14.5-1-14.5-11.5 0-5.2-42.9 4-49.1 7-6.1 3.1-33.9 16-33.9 16s45.8 2.7 53.9 6.2 43.8 16.5 43.8 16.5l-2.8 13.3h37.8l-3.8-13.3s35.1-12.7 43.8-16.5 53.9-6.2 53.9-6.2z'/%3e%3cpath fill='%2357BA17' d='M217.7 171.7c0 21.1 17.2 38.3 38.3 38.3 21.1 0 38.3-17.2 38.3-38.3v-11.5h-76.5v11.5z'/%3e%3cpath fill='%23338AF3' d='M256 110.5c-21.1 0-38.3 17.2-38.3 38.3v11.5h76.5v-11.5c.1-21.1-17.1-38.3-38.2-38.3z'/%3e%3c/svg%3e",
  EE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23111' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23368FD8' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='white' d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  EG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%23D80027' d='M0 0h512v113.8H0z'/%3e%3cpath d='M0 227.6h512v113.8H0z'/%3e%3cpath fill='%23C09300' d='M220.3 204.4s0-58.4 4.5-64.7c3.1-4.3 16.8 5.2 22.7 4.5 0 0 4.2-7.5 4.5-12 .3-4.6-1.1-7.6-4.9-6.2 0 0-1.2-2.1.5-3.3 1.6-1.2 5.6.1 5.6.1s-.5-1 1.6-.9c2.9.2 7.2 1.4 7.4 5.6.2 3.1.3 7.7.4 8.7.7 6.8 2.7 8.7 2.7 8.7s18.4-9.2 22-5.2c3.3 3.8 4.5 64.7 4.5 64.7l-18.1-16.8 12.1 29.5s-14.4 2.4-28.9 2.4c-14.5 0-31.1-4.2-31.1-4.2l13.8-28.2-19.3 17.3z'/%3e%3c/svg%3e",
  EH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath d='M0 0h512v113.8H0z'/%3e%3cpath fill='%23428823' d='M0 227.6h512v113.8H0z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M256 170.7L0 341.3V0zm53.1 0c0-22.9 13.1-42.1 34.6-46.8-3.3-.7-6.7-1.1-10.3-1.1-26.4 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9c3.5 0 7-.4 10.3-1.1-21.5-4.8-34.6-23.9-34.6-46.8z'/%3e%3cpath d='M365 129.2l10.3 31.7h33.3l-27 19.6 10.3 31.7-26.9-19.6-27 19.6 10.3-31.7-27-19.6h33.4z'/%3e%3c/g%3e%3c/svg%3e",
  ER: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23338AF3' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%2356AF35' d='M0 0h512v170.7H0z'/%3e%3cpath fill='%23D80027' d='M0 341.3l512-170.7L0 0v341.3z'/%3e%3cg fill='%23ffc945'%3e%3cpath d='M134.7 231.5c33.6 0 60.8-27.2 60.8-60.8s-27.2-60.8-60.8-60.8-60.8 27.2-60.8 60.8 27.2 60.8 60.8 60.8zm0 24.3c-47 0-85.2-38.1-85.2-85.2s38.1-85.2 85.2-85.2 85.2 38.1 85.2 85.2-38.2 85.2-85.2 85.2z'/%3e%3ccircle cx='119.5' cy='148.3' r='17.5'/%3e%3ccircle cx='148.9' cy='158.5' r='17.5'/%3e%3ccircle cx='134.7' cy='135.2' r='17.5'/%3e%3ccircle cx='119.5' cy='172.7' r='17.5'/%3e%3ccircle cx='149.9' cy='182.8' r='17.5'/%3e%3ccircle cx='122.5' cy='198' r='17.5'/%3e%3ccircle cx='145.9' cy='205.2' r='17.5'/%3e%3c/g%3e%3c/svg%3e",
  ES: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.5 15'%3e%3cpath fill='white' d='M0 0h22.5v15H0V0z'/%3e%3cpath fill='%23D03433' d='M0 0h22.5v4H0V0zm0 11h22.5v4H0v-4z'/%3e%3cpath fill='%23FBCA46' d='M0 4h22.5v7H0V4z'/%3e%3cpath fill='white' d='M7.8 7h1v.5h-1V7z'/%3e%3cpath fill='%23A41517' d='M7.2 8.5c0 .3.3.5.6.5s.6-.2.6-.5L8.5 7H7.1l.1 1.5zM6.6 7c0-.3.2-.5.4-.5h1.5c.3 0 .5.2.5.4V7l-.1 1.5c-.1.6-.5 1-1.1 1-.6 0-1-.4-1.1-1L6.6 7z'/%3e%3cpath fill='%23A41517' d='M6.8 7.5h2V8h-.5l-.5 1-.5-1h-.5v-.5zM5.3 6h1v3.5h-1V6zm4 0h1v3.5h-1V6zm-2.5-.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v.2c0 .2-.1.3-.3.3H7c-.1 0-.2-.1-.2-.2v-.3z'/%3e%3c/svg%3e",
  ET: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.5 15'%3e%3cpath fill='%2320AA46' d='M0 0h22.5v5H0V0z'/%3e%3cpath fill='%23E92F3B' d='M0 10h22.5v5H0v-5z'/%3e%3cpath fill='%23FADF50' d='M0 5h22.5v5H0V5z'/%3e%3ccircle fill='%23205CCA' cx='11.3' cy='7.5' r='5.2'/%3e%3cg stroke='%23FFDB3D' fill='none'%3e%3cpath d='M11.3 8.8l-2.1 1.5.8-2.4-2-1.5h2.5l.8-2.3.8 2.3h2.6l-2.1 1.5.8 2.4-2.1-1.5zm-1-2.4h1.9M9.9 7.8l1.3 1m.8-2.6l.7 1.8M10 7.9l.6-1.8M11 9l1.6-1.1' stroke-width='.5'/%3e%3cpath d='M8.7 3.9l1.1 1.6m4-1.7l-1 1.6m-1.5 4.7V12M8.9 8.3L7.1 9m8.4 0l-1.8-.7' stroke-width='.25'/%3e%3c/g%3e%3c/svg%3e",
  FI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%232E52B2' d='M512 129.3V212H203.7v129.3H121V212H0v-82.7h121V0h82.7v129.3z'/%3e%3c/svg%3e",
  FJ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%232E52B2' d='M0 0h512v341.3H0z'/%3e%3cpath fill='white' d='M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z'/%3e%3cpath d='M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176z'/%3e%3cpath d='M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zm256 0v-15.1l-57.4-38.3H176z'/%3e%3c/g%3e%3cpath fill='%23F3F3F3' d='M307.1 127.1v92c0 61.6 80.5 80.5 80.5 80.5s80.4-19 80.4-80.6v-92l-80.5-23-80.4 23.1z'/%3e%3cpath fill='%23D80027' d='M468 132.8V98.3H307.1v34.5h69v69h-69v23h69V296c6.9 2.5 11.5 3.5 11.5 3.5s4.6-1.1 11.5-3.5v-71.2h69v-23h-69v-69H468z'/%3e%3c/svg%3e",
  FK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%230052B4' d='M0 0h512v341.3H0z'/%3e%3cpath fill='white' d='M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z'/%3e%3cpath fill='%23D80027' d='M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z'/%3e%3cpath fill='%230052B4' d='M155.8 115L256 170.7v-15.8L184.2 115z'/%3e%3cpath fill='white' d='M155.8 115L256 170.7v-15.8L184.2 115z'/%3e%3cpath d='M155.8 115L256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z' fill='%23D80027'/%3e%3cpath fill='%230052B4' d='M100.2 55.6L0 0v15.7l71.8 39.9z'/%3e%3cpath fill='white' d='M100.2 55.6L0 0v15.7l71.8 39.9z'/%3e%3cpath d='M100.2 55.6L0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z' fill='%23D80027'/%3e%3cpath fill='%231F8BDE' d='M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3z'/%3e%3cpath fill='white' d='M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3zm79.6 86.3c7.9-4.5 15.9-10 23.2-16.7 20.5-18.5 32.6-41.4 32.6-69.7v-90c0-.3-120.4-.3-120.4-.3v90.3c0 28.3 12.1 51.2 32.6 69.7 8.3 7.5 17.6 13.9 27.6 19 1.4-.6 2.8-1.4 4.4-2.3z'/%3e%3cpath fill='%23187536' d='M347.1 193.4c-2.6-7.9 1.7-14.3 10.1-14.3h60.5c8.2 0 12.8 6.3 10.1 14.3l-5.5 16.5c-2.6 7.9-8.9 9.2-15.8 4 0 0 2.6-4.8-19.1-4.8-21.7 0-19.1 4.8-19.1 4.8-6.1 5.7-13.1 4-15.8-4 .1.1-5.4-16.5-5.4-16.5z'/%3e%3cpath fill='white' d='M357.4 179.1c8.1 1.6 17.8-15 30.1-15 13.1 0 21.8 17.1 30.1 15 7.4-1.8 15-22.2 15-30.1 0-16.6-20.2-30.1-45.1-30.1-24.9 0-45.1 13.5-45.1 30.1-.1 8.5 6.6 28.5 15 30.1zm-1.4 91.6c6.2.4 12.5-1.8 17.2-6.5l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c4.7 4.7 11 6.9 17.1 6.5 5.3-.3 32.5-33.5 25.7-32.6-4.6.6-9.1 2.8-12.7 6.3l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-3.5-3.5-7.8-5.6-12.3-6.3-6.7-1.1 20.1 32.2 25.3 32.5zM322.1 210c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0 0 0 5.5-14.8 2.5-15.9-7.9-2.9-17.2-1.2-23.5 5.2l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-6.2-6.2-15.1-8-22.8-5.5-3.1 1.1 1.9 16.1 1.9 16.1z'/%3e%3c/svg%3e",
  FM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23338AF3' d='M0 0h512v341.3H0z'/%3e%3cpath d='M256 37.9l10.1 31.2H299l-26.6 19.3 10.2 31.2-26.6-19.3-26.6 19.3 10.2-31.2L213 69.1h32.9zM123.2 170.7l31.2-10.2v-32.8l19.3 26.6 31.2-10.2-19.3 26.6 19.3 26.5-31.2-10.1-19.3 26.5v-32.8zM256 303.5l-10.1-31.2H213l26.6-19.3-10.2-31.3L256 241l26.6-19.3-10.2 31.3 26.6 19.3h-32.9zm132.8-132.8l-31.2 10.1v32.8l-19.3-26.5-31.2 10.1 19.3-26.5-19.3-26.6 31.2 10.2 19.3-26.6v32.8z' fill='white'/%3e%3c/svg%3e",
  FO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%230F61A5' d='M512 214.5H206.2v126.8h-87.8V214.5H0v-87.7h118.4V0h87.8v126.8H512V192z'/%3e%3cpath fill='%23E50E3D' d='M512 149.3V192H183.7v149.3H141V192H0v-42.7h141V0h42.7v149.3z'/%3e%3c/svg%3e",
  FR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%230052B4' d='M0 85.331h170.663v341.337H0z'/%3e%3cpath fill='%23D80027' d='M341.337 85.331H512v341.337H341.337z'/%3e%3c/svg%3e",
  GA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%230052B4' d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  GB: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.333h512V426.67H0z'/%3e%3cpath fill='%23D80027' d='M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z'/%3e%3cpath d='M393.785 315.358L512 381.034v-65.676zm-82.133 0L512 426.662v-31.474l-143.693-79.83zm146.982 111.304l-146.982-81.664v81.664z' fill='%230052B4'/%3e%3cpath fill='white' d='M311.652 315.358L512 426.662v-31.474l-143.693-79.83z'/%3e%3cpath fill='%23D80027' d='M311.652 315.358L512 426.662v-31.474l-143.693-79.83z'/%3e%3cpath d='M90.341 315.356L0 365.546v-50.19zm110.007 14.154v97.151H25.491z' fill='%230052B4'/%3e%3cpath fill='%23D80027' d='M143.693 315.358L0 395.188v31.474l200.348-111.304z'/%3e%3cpath d='M118.215 196.634L0 130.958v65.676zm82.133 0L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z' fill='%230052B4'/%3e%3cpath fill='white' d='M200.348 196.634L0 85.33v31.474l143.693 79.83z'/%3e%3cpath fill='%23D80027' d='M200.348 196.634L0 85.33v31.474l143.693 79.83z'/%3e%3cpath d='M421.659 196.636L512 146.446v50.19zm-110.007-14.154V85.331h174.857z' fill='%230052B4'/%3e%3cpath fill='%23D80027' d='M368.307 196.634L512 116.804V85.33L311.652 196.634z'/%3e%3c/svg%3e",
  GD: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23c60a0a' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%233E8446' d='M256 170.7L44.5 296.8V44.5z'/%3e%3cpath d='M256 170.7l211.5 126.1h-423zM467.5 44.5L256 170.7 44.5 44.5z' fill='%23FFDA44'/%3e%3cpath fill='%233E8446' d='M467.5 44.5v252.3L256 170.7z'/%3e%3cpath d='M256 10.4l3.3 10.2H270l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm-85.9 0l3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0l3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM256 304.2l3.3 10.2H270l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm-85.9 0l3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0l3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7z' fill='%23FFDA44'/%3e%3ccircle fill='%23c60a0a' cx='244.5' cy='170.7' r='76.2'/%3e%3cpath fill='%23FFDA44' d='M244.5 110.1l13.6 41.8h44l-35.6 25.8 13.6 41.8-35.6-25.8-35.5 25.8 13.6-41.8-35.6-25.8h44zm-136.8 57.7c4.4 6.9 2.3 16.1-4.6 20.5s-16.1 2.3-20.5-4.6c-7.9-12.5-3.3-33-3.3-33s20.4 4.6 28.4 17.1z'/%3e%3ccircle fill='%23A2001D' cx='99.1' cy='182.1' r='7.4'/%3e%3c/svg%3e",
  GE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.5 15'%3e%3cpath fill='white' d='M.8 0h21v15H.8V0z'/%3e%3cpath fill='%23eb000e' d='M9.8 6H0v3h9.8v6h3V9h9.8V6h-9.8V0h-3v6z'/%3e%3cpath fill='%23eb000e' d='M17.3 2.7l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm-12.7 0l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm0 9l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm12.7 0l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z'/%3e%3c/svg%3e",
  GF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 60'%3e%3cpath fill='%23FDEB01' d='M0 0l90 60H0z'/%3e%3cpath fill='%2358A846' d='M90 0v60L0 0z'/%3e%3cpath fill='%23ED3D24' d='M50.7 33.3l9.3-6.7H48.5L45 15.7l-3.5 10.9H30l9.3 6.7-3.6 11 9.3-6.7 9.3 6.7z'/%3e%3c/svg%3e",
  GG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23D80027' d='M308 0H204v118.7H0v104h204V342h104V222.7h205v-104H308z'/%3e%3cpath fill='%23FFDA44' d='M368.6 188l26 17.3V136l-26 17.3h-95.3V58.1l17.3-26h-69.2l17.3 26v95.2h-95.3l-26-17.3v69.3l26-17.3h95.3v95.2l-17.3 26h69.2l-17.3-26V188z'/%3e%3c/svg%3e",
  GH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23496E2D' d='M0 312.888h512v113.775H0z'/%3e%3cpath d='M255.883 199.111l14.119 43.458 40.366 3.2-36.969 26.861 19.453 40.259-36.969-26.859-36.97 26.859 14.123-43.459-36.969-26.861h45.696z'/%3e%3c/svg%3e",
  GI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23D80027' d='M0 230h513v112H0z'/%3e%3cpath fill='%23D80027' stroke='black' stroke-miterlimit='10' d='M363.1 131.8V99.1H374V77.3h-21.9v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7h-21.8V55.5h10.9V33.7h-21.8v10.9h-10.9V33.7H254v10.9h-10.9V33.7h-21.8v21.8h10.9v76.3h-21.8V99.1h10.9V77.3h-21.8v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7H145V219h239.9v-87.2z'/%3e%3cpath fill='%23FFDA44' stroke='black' stroke-miterlimit='10' d='M264.9 235.5l-24.2 18.2 19.1 14.3v31.3h-23.2v9h23v7.9h-23v9.3H270V268l19.1-14.3-24.2-18.2zm0 25.3l-10.1-7.1 10.1-7.1 10.1 7.1-10.1 7.1z'/%3e%3cpath d='M239.6 209.7v-27.9s.1-22.3 25-22.3c24.8 0 25.7 22 25.7 22v28.2h-50.7zm-69.1 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8z'/%3e%3cpath d='M169.1 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm151.8 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm8.4-77.7v-15.7s.1-12.1 11.3-12.1c11.3 0 11.7 11.9 11.7 11.9V132h-23zm-78.8 0v-23.7s.1-18.3 14.3-18.3c14.2 0 14.7 18 14.7 18v24h-29zm-73 0v-15.7s.1-12.1 11.3-12.1 11.7 11.9 11.7 11.9V132h-23z'/%3e%3c/svg%3e",
  GL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M513 0v171H0V0z'/%3e%3ccircle fill='white' cx='185.8' cy='171.2' r='117.8'/%3e%3cpath fill='%23D80027' d='M68 171c0-65.1 52.8-117.8 117.8-117.8 65.1 0 117.8 52.8 117.8 117.8'/%3e%3c/svg%3e",
  GM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%231a7e25' d='M0 322.783h512v103.88H0z'/%3e%3cpath fill='%23cf0d19' d='M0 85.337h512v104.515H0z'/%3e%3cpath fill='%230052B4' d='M0 210.877h512v89.656H0z'/%3e%3c/svg%3e",
  GN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23FFDA44' d='M0 0h512v342H0z'/%3e%3cpath fill='%236DA544' d='M342 0h171v342H342z'/%3e%3cpath fill='%23D80027' d='M0 0h171v342H0z'/%3e%3c/svg%3e",
  GP: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%230052B4' d='M0 85.331h170.663v341.337H0z'/%3e%3cpath fill='%23D80027' d='M341.337 85.331H512v341.337H341.337z'/%3e%3c/svg%3e",
  GQ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%236DA544' d='M0 0h513v113.8H0z'/%3e%3cpath fill='%23D80027' d='M0 227.6h513V342H0z'/%3e%3cpath fill='%230070C8' d='M126 170.7L0 341.3V0z'/%3e%3cpath fill='none' stroke='black' stroke-miterlimit='10' d='M233.8 139.4v40.4c0 35.6 35.6 35.6 35.6 35.6s35.6 0 35.6-35.6v-40.4h-71.2z'/%3e%3cpath fill='%23786145' d='M264.5 179.8h9.8l4 25.8h-17.8z'/%3e%3cpath fill='%236DA544' d='M287.2 162c0-9.8-8-14.8-17.8-14.8s-17.8 5-17.8 14.8c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h35.6c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9z'/%3e%3cpath d='M230.7 120l1.9 3.3h3.8l-1.9 3.3 1.9 3.2h-3.8l-1.9 3.3-1.9-3.3H225l1.9-3.2-1.9-3.3h3.8zm15.3 0l1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.3 0l1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.8 0l1.9 3.3h3.8l-1.9 3.3 1.9 3.2H279l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm16 0l1.9 3.3h3.8l-1.9 3.3 1.9 3.2H295l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm15 0l1.9 3.3h3.7l-1.9 3.3 1.9 3.2H310l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8z' fill='%23FFDA00' stroke='black' stroke-miterlimit='10'/%3e%3c/svg%3e",
  GR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cg fill='%230d5eaf'%3e%3cpath d='M0 0h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z'/%3e%3cpath d='M0 0h190v190H0z'/%3e%3c/g%3e%3cg fill='white'%3e%3cpath d='M0 76h190v38H0z'/%3e%3cpath d='M76 0h38v190H76z'/%3e%3c/g%3e%3c/svg%3e",
  GT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 0h171v342H0zm342 0h171v342H342z' fill='%23338AF3'/%3e%3ccircle fill='%23DCC26D' cx='256' cy='155.8' r='25.5'/%3e%3cpath fill='%23628A40' d='M194.2 155.9c0 22.1 11.8 42.5 30.8 53.5 5.9 3.4 13.5 1.4 16.9-4.5 3.4-5.9 1.4-13.5-4.5-16.9-11.5-6.6-18.5-18.9-18.5-32.1 0-6.8-5.5-12.4-12.4-12.4s-12.3 5.5-12.3 12.4zm95.1 52.1c17.8-11.4 28.6-31 28.5-52.1 0-6.8-5.5-12.4-12.4-12.4-6.8 0-12.4 5.5-12.4 12.4 0 12.7-6.5 24.5-17.1 31.3-5.8 3.6-7.7 11.2-4.1 17 3.6 5.8 11.2 7.7 17 4.1.2-.1.3-.2.5-.3z'/%3e%3c/svg%3e",
  GU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%230052B4' d='M11.1 11.1h489.7v319.1H11.1z'/%3e%3cpath fill='%237DBEF1' d='M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z'/%3e%3cpath fill='%231C8AE6' d='M179.8 180.7h152.6l-29.3 64.9h-95.2z'/%3e%3cpath fill='%23FFF042' d='M192.3 205.9s40.5 38.2 51 38.2c12.4 0 12.6-18.4 25.5-25.5 20.2-11.1 51-12.7 51-12.7L297 248.7l-41 36.6-46.8-39.7-16.9-39.7z'/%3e%3cpath fill='%23259C7B' d='M256 157.5l-22.5 15.6 7.9-26.2-21.8-16.5 27.4-.5 9-25.9 9 25.9 27.4.5-21.8 16.6 7.9 26.2-22.5-15.7z'/%3e%3cpath fill='%238E5715' d='M249.7 144.6c-.9 9.2-1.5 18.4-1.7 27.6-.3 11.9.3 20.7 2 26 2.2 6.6 7.2 12.9 14.2 18.9 5.3 4.6 10.6 8.1 14.2 10.1 3.1 1.7 7 .6 8.7-2.4 1.7-3.1.6-7-2.4-8.7-4.3-2.5-8.4-5.4-12.2-8.7-5.4-4.6-9.1-9.2-10.4-13.3-1.1-3.4-1.6-11.3-1.4-21.7.2-8.9.8-17.8 1.7-26.6.4-3.5-2.2-6.6-5.7-7-3.6-.3-6.7 2.3-7 5.8z'/%3e%3cpath fill='white' d='M217.8 170.7l25.5 38.2h-25.5v-38.2z'/%3e%3cpath fill='none' stroke='%23D80027' stroke-width='12' stroke-miterlimit='10' d='M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z'/%3e%3c/svg%3e",
  GW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%236DA544' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%23FFDA44' d='M0 85.331h512v170.663H0z'/%3e%3cpath fill='%23D80027' d='M0 85.331h181.793v341.337H0z'/%3e%3cpath d='M98.32 195.127l15.107 46.497h48.894l-39.555 28.74 15.108 46.498-39.554-28.737-39.556 28.737 15.111-46.498-39.554-28.74h48.891z'/%3e%3c/svg%3e",
  GY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3e%3cpath fill='%23009E49' d='M0 0h900v600H0V0z'/%3e%3cpath fill='white' d='M0 0l947 300L0 600V0z'/%3e%3cpath fill='%23FFD00D' d='M0 26.1L870 300 0 573.9V26.1z'/%3e%3cpath fill='%232D2D2D' d='M0 0l450 300L0 600V0z'/%3e%3cpath fill='%23D3132F' d='M0 35l397.5 265L0 565V35z'/%3e%3c/svg%3e",
  HK: "data:image/svg+xml,%3csvg viewBox='0 0.5 21 14' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath fill='white' d='M0 0h21v15H0z'/%3e%3cpath fill='%23ee1c25' d='M0 0h21v15H0z'/%3e%3cpath d='M12 7.19c-.798-.5-1 .409-1 0 0-.828.895-1.5 2-1.5s2 .672 2 1.5c-.949 0-1.044.5-1.5.5-.56 0-.702 0-1.5-.5zM13.25 7a.25.25 0 100-.5.25.25 0 000 .5zm-1.81 1.962c.228-.913-.698-.824-.31-.95.788-.257 1.703.387 2.045 1.438.341 1.05-.021 2.11-.809 2.366-.293-.903-.798-.838-.939-1.272-.173-.533-.217-.668.012-1.582zm.566 1.13a.25.25 0 10.476-.154.25.25 0 00-.476.154zM9.58 8.977c.94-.065.57-.919.81-.588.486.67.157 1.74-.737 2.389-.894.65-2.013.632-2.5-.038.768-.558.55-1.018.92-1.286.453-.33.568-.413 1.507-.477zm-.899.888a.25.25 0 10.294.405.25.25 0 00-.294-.405zm.312-2.652c.351.874 1.049.258.809.588-.487.67-1.606.687-2.5.038-.894-.65-1.223-1.719-.736-2.39.767.559 1.138.21 1.507.478.453.33.568.413.92 1.286zm-1.124-.58a.25.25 0 10-.293.404.25.25 0 00.293-.404zm2.619-.524c-.722.605.08 1.078-.309.951-.788-.256-1.15-1.315-.809-2.365.342-1.05 1.257-1.695 2.045-1.439-.293.903.153 1.147.012 1.581-.173.533-.217.668-.939 1.272zm.205-1.247a.25.25 0 10-.475-.155.25.25 0 00.475.155z' fill='white'/%3e%3c/g%3e%3c/svg%3e",
  HN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 0h513v114H0zm0 228h513v114H0zm203.5-110.1l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm105 0l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM256 147.6l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm-52.5 29.7l6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1zm105 0l6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1z' fill='%23338AF3'/%3e%3c/svg%3e",
  HR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23D80027' d='M0 0h513v114H0z'/%3e%3cpath fill='%230052B4' d='M0 228h513v114H0z'/%3e%3cpath d='M309.3 113.2v-44l17.5-14.4 17.7 14.4v44zm-105.6 0v-44l-17.3-14.4-17.9 14.4v44zm35.2 0v-44l17.6-14.4 17.6 14.4v44z' fill='%23338AF3'/%3e%3cpath d='M309.3 113.2h-35.2v-44l17.5-14.4 17.7 14.4zm-70.4 0h-35.2v-44l17.5-14.4 17.7 14.4z' fill='%230052B4'/%3e%3cpath stroke='%23D80027' fill='white' d='M168.5 113.2v101.9c0 24.3 14.4 46.2 35.4 59.4 21.3 13.4 42.1 14.7 52.6 14.7s31.4-1.7 52.6-14.8c21-13 35.4-35.1 35.4-59.3V113.2h-176z'/%3e%3cpath d='M168.5 113.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm35.2 35.2h35.2V254h-35.2zm35.2-35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-35.2 35.2h35.2V254h-35.2zm35.2 55.5c8.6-5.4 16.2-12.3 22-20.3h-22v20.3zM181.7 254c5.8 8 13.3 14.9 22 20.4V254h-22zm57.2 0v33.7c7.2 1.2 13.3 1.5 17.6 1.5 4.3 0 10.4-.3 17.6-1.6V254h-35.2z' fill='%23D80027'/%3e%3c/svg%3e",
  HT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23A2001D' d='M0 0h513v172H0z'/%3e%3cpath fill='%230052B4' d='M0 172h513v172H0z'/%3e%3cpath fill='white' d='M381.4 251.5l-110.7-13.8-110.8 13.8V85.4h221.5z'/%3e%3ccircle fill='%230052B4' cx='270.7' cy='182.3' r='55.4'/%3e%3ccircle fill='%23A2001D' cx='270.7' cy='182.3' r='27.7'/%3e%3cpath fill='%236DA544' d='M229.1 113.1h83.1l-41.5 41.5z'/%3e%3cpath fill='%23FFDA44' d='M256.8 140.8h27.7v83h-27.7z'/%3e%3cpath fill='%236DA544' d='M314.9 215.5h-88.5l-66.5 36h221.5z'/%3e%3c/svg%3e",
  HU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%236DA544' d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  ID: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.333h512v341.333H0z'/%3e%3cpath fill='%23E00' d='M0 85.333h512V256H0z'/%3e%3c/svg%3e",
  IE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M0 85.331h170.663v341.337H0z'/%3e%3cpath fill='%23FF9811' d='M341.337 85.331H512v341.337H341.337z'/%3e%3c/svg%3e",
  IL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M340.6 122.4h-56.1l-28-48.6-28 48.6h-56.1l28 48.6-28 48.6h56.1l28 48.6 28-48.6h56.1l-28-48.6 28-48.6zM293.2 171L276 204.2h-38.9L219.8 171l17.2-33.2h38.9l17.3 33.2zm-36.7-71.8l11.9 23.3h-23.9l12-23.3zm-58.3 38.6h23.9l-10.8 21-13.1-21zm0 66.4l13-22.1 11.9 22.1h-24.9zm58.3 37.5l-11.9-22.1h23.9l-12 22.1zm59.4-37.5h-25l11.9-22.1 13.1 22.1zm-26.1-66.4h26.1l-13 22.1-13.1-22.1zM0 21.3h512V64H0zm0 256h512V320H0z' fill='%232E52B2'/%3e%3c/svg%3e",
  IM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23E52D42' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M393.3 68.2h-45.8l-33.8 80.2-34.4-22.9s-24.7-59.1-34.4-68.2c-9.7-9.7-18.7-.6-48.9 7.8-29.6 8.4-30.8 18.7-42.2 18.7-4.8 0-19.9-17.5-27.7-22.3-12.1-7.8-16.9-4.2-13.9 7.2 1.2 4.8 10.9 10.9 16.9 19.9 7.8 11.5 12.7 25.9 12.7 25.9s10.9-10.3 16.9-12.1c9-2.4 19.3 1.8 31.4 0 15.1-2.4 31.4-10.9 31.4-10.9l4.2 43.4s-54.3 50.7-49.5 70.6 56.1 44.6 68.2 62.7c12.1 17.5-7.2 24.1-7.2 32.6s-1.8 19.9 7.2 16.3c9-3.6 10.3-18.1 18.7-31.4 6-9 10.3-13.9 11.5-17.5 1.8-9-23.5-32-37.4-48.9-6.6-7.8-19.9-18.7-19.9-18.7l39.2-29.6s67.6 27.7 82.6 18.7c15.1-9 19.3-98.3 19.3-98.3l47-11.5-12.1-11.7z'/%3e%3cpath fill='%23F8DD4E' d='M279.3 262.4c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.8-182.8c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm0 91.1c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6 0 11.5 4.8 11.5 11.5-.6 6.7-5.5 11.5-11.5 11.5zm-136.9 45.8c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.2-136.9c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-4.8 11.5-11.5 11.5zm22.9 91.1c-6 0-11.5-10.3-11.5-22.9s4.8-22.9 11.5-22.9c6 0 11.5 10.3 11.5 22.9s-4.8 22.9-11.5 22.9zm-114-45.2c-6 0-11.5-4.8-11.5-11.5 0-6.6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5 0 6.6-4.8 11.5-11.5 11.5z'/%3e%3c/svg%3e",
  IN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23181A93' d='M17.3 0h478.4v342H17.3V0z'/%3e%3cpath fill='%23FFA44A' d='M0 0h513v114H0V0z'/%3e%3cpath fill='%231A9F0B' d='M0 228h513v114H0V228z'/%3e%3cpath fill='white' d='M0 114h513v114H0V114z'/%3e%3ccircle fill='white' cx='256.5' cy='171' r='34.2'/%3e%3cpath fill='%23181A93' d='M256.5 216.6c-25.1 0-45.6-20.5-45.6-45.6s20.5-45.6 45.6-45.6 45.6 20.5 45.6 45.6-20.5 45.6-45.6 45.6zm0-11.4c18.2 0 34.2-16 34.2-34.2s-15.9-34.2-34.2-34.2-34.2 16-34.2 34.2 16 34.2 34.2 34.2z'/%3e%3ccircle fill='%23181A93' cx='256.5' cy='171' r='22.8'/%3e%3c/svg%3e",
  IO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0-.3h513V342H0V-.3z'/%3e%3cpath fill='%230052B4' d='M462.9 198.1c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zM0 31.7l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 1-20 6-30.1 12-7 4-16 9-20 9s-14-5-21-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-11-30.1-12v22zm462.9 55.2c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 3.9-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 1 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-8 19-9v-23zm-50.1 133.3c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 0 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-9 19-9v-23z'/%3e%3cpath fill='white' d='M0-.3h256v171H0V-.3z'/%3e%3cpath d='M389.8 119.9H408v78.8h-18.3l.1-78.8zm0 117.8H408v75.1h-18.3l.1-75.1z' fill='%23A2001D'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144-.3h-32v70H0v32h112v69h32v-69h112v-32H144v-70z'/%3e%3cpath d='M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54z'/%3e%3cpath d='M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54zM0 170.7v-15l57-38h23l-80 53zm256 0v-15l-57-38h-23l80 53z'/%3e%3c/g%3e%3cg fill='%232E52B2'%3e%3cpath d='M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73z'/%3e%3cpath d='M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73zM0 147.7v-30h46l-46 30zm96 23v-49l-73 49h73zm160-23v-30h-46l46 30zm-96 23v-49l73 49h-73z'/%3e%3c/g%3e%3cpath fill='%235DA51E' stroke='%2345602C' stroke-width='4' stroke-miterlimit='10' d='M462.8 91.5h-29.1l25.7-25.7c4.5-4.4 4.5-11.4 0-15.8l-3.4-3.4c-4.4-4.4-11.4-4.4-15.8 0l-25.9 25.9V37.4c0-6.2-5.1-11.3-11.3-11.3h-4.7c-6.2 0-11.3 5.1-11.3 11.3v31.7l-23.5-23.8c-4.7-4.7-12.2-4.7-16.9 0l-3.6 3.6c-4.7 4.7-4.7 12.4 0 17.2l25 25.4h-30.6c-6 0-10.9 4.9-10.9 10.9v4.6c0 6 4.9 10.9 10.9 10.9H369l-20.7 20.7c-4.4 4.4-4.4 11.4 0 15.8l3.4 3.4c4.4 4.4 11.4 4.4 15.8 0l19.6-19.6V167c0 6.1 5.1 11.1 11.3 11.3h4.7c6.2 0 11.3-5.1 11.3-11.3v-28.3l22.2 22.6c4.7 4.7 12.4 4.7 17.1 0l3.6-3.6c4.7-4.7 4.7-12.4 0-17.2L435.2 118h27.6c5.9 0 10.7-4.9 10.9-10.9v-4.6c0-6.1-4.9-11-10.9-11z'/%3e%3cpath fill='%23E2DD24' stroke='%23525625' stroke-width='4' stroke-miterlimit='10' d='M439.2 249.1h-79.8s-.9-13.4-6-21.8c-6.2-10.4-13.9-28.1-1.4-36.7 15.9-10.9 33.7.8 48.2.8 11.8.1 26.9-14 45-.8 12.2 8.9 3.9 28.2-1.3 36.7-7 11.5-4.7 21.8-4.7 21.8z'/%3e%3c/svg%3e",
  IQ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23CE1126' d='M0 0h513v114H0z'/%3e%3cpath d='M0 228h513v114H0z'/%3e%3cpath d='M219.2 160.7h-29.3c1.5-5.7 6.6-9.9 12.8-9.9v-19.9c-18.3 0-33.1 14.9-33.1 33.1v16.5h49.6c1.8 0 3.3 1.5 3.3 3.3v6.6h-66.2v19.9h86.1v-26.5c0-12.7-10.4-23.1-23.2-23.1zm49.6 29.8v-59.6H249v79.5h33.1v-19.9zm66.2 0v-59.6h-19.8v59.6h-6.6v-19.8h-19.9v39.7h59.6v-19.9z' fill='%23547C31'/%3e%3c/svg%3e",
  IR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h512v342H0z'/%3e%3cpath fill='%236DA544' d='M0 0h513v114H0z'/%3e%3cpath d='M0 227.9h513v114H0zm278.8-93.1c.1 2 8.7 26.2 4.4 39.4-6.6 20.3-15.8 21.8-19.8 24.5V134l-6.9-4.2-6.9 4.2v64.7c-4-2.7-12.4-2.4-19.8-24.5-4.3-12.7 5.7-37.3 5.8-39.2 0 0-9.5 8.1-15.8 24-5.9 14.8 1.9 49.6 29.5 54.8 2.3.4 4.7 5.6 7.2 5.6 2.1 0 4.1-5.2 6-5.5 28.4-4.6 35-41.7 29.9-55.6-5.4-14.6-13.6-23.5-13.6-23.5z' fill='%23D80027'/%3e%3cpath d='M44.6 98.9h22.3v24.4H44.6zM0 98.9h22.3v24.4H0zm89.2 0h22.3v24.4H89.2zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4H223zm44.7 0H290v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0H513v24.4h-22.3zm-446.1 118h22.3v25.5H44.6zm-44.6 0h22.3v25.5H0zm89.2 0h22.3v25.5H89.2zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5H223zm44.7 0H290v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0H513v25.5h-22.3z' fill='white' opacity='.5'/%3e%3c/svg%3e",
  IS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.334h512v341.337H0z'/%3e%3cpath fill='white' d='M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z'/%3e%3cpath fill='%23D80027' d='M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z'/%3e%3c/svg%3e",
  IT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M341.334 85.33H0v341.332h512V85.33z'/%3e%3cpath fill='%236DA544' d='M0 85.333h170.663V426.67H0z'/%3e%3cpath fill='%23D80027' d='M341.337 85.333H512V426.67H341.337z'/%3e%3c/svg%3e",
  JE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23D80027' d='M301.8 171L513 30.2V0h-45.3L256.5 140.8 45.3 0H0v30.2L211.2 171 0 311.8V342h45.3l211.2-140.8L467.7 342H513v-30.2z'/%3e%3cpath fill='%23FFDA44' d='M233.7 44.6l22.3 5.6 22.3-5.6 4-20.9-14.9 6.5L256 14.8l-11.4 15.4-14.9-6.5z'/%3e%3cpath fill='%23D80027' d='M233.7 44.6s-4 12.9-4 29.9c0 27.9 26.3 41.3 26.3 41.3s26.3-15.5 26.3-41.3c0-15.4-4-29.9-4-29.9s-8.1-5-22.3-5-22.3 5-22.3 5z'/%3e%3c/svg%3e",
  JM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%236DA544' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M215.864 256.006L0 399.911V112.089zM512 112.089v287.822L296.136 256.006z'/%3e%3cpath fill='%230052B4' d='M512 112.089L296.136 256.006 512 399.911v26.757h-40.125L256 282.752 40.125 426.668H0v-26.757l215.864-143.905L0 112.089V85.331h40.125L256 229.248 471.875 85.331H512z'/%3e%3cpath fill='%23FFDA44' d='M512 112.089L296.136 256.006 512 399.911v26.757h-40.125L256 282.752 40.125 426.668H0v-26.757l215.864-143.905L0 112.089V85.331h40.125L256 229.248 471.875 85.331H512z'/%3e%3c/svg%3e",
  JO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.339h512v341.326H0z'/%3e%3cpath d='M0 85.339h512v113.775H0z'/%3e%3cpath fill='%236DA544' d='M0 312.89h512v113.775H0z'/%3e%3cpath fill='%23D80027' d='M256 256.006L0 426.669V85.331z'/%3e%3cpath fill='white' d='M77.913 224.802l7.876 16.469 17.786-4.11-7.965 16.426 14.303 11.343-17.808 4.014.049 18.255-14.241-11.421-14.241 11.421.05-18.255-17.809-4.014 14.303-11.343-7.965-16.426 17.786 4.11z'/%3e%3c/svg%3e",
  JP: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.337H0z'/%3e%3ccircle fill='%23D80027' cx='256' cy='255.994' r='96'/%3e%3c/svg%3e",
  KE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.337H0z'/%3e%3cpath d='M0 85.331h512v90.579H0z'/%3e%3cpath fill='%23496E2D' d='M0 336.089h512v90.568H0z'/%3e%3cpath fill='%23A2001D' d='M0 198.606h512v114.799H0z'/%3e%3cg fill='white'%3e%3cpath d='M323.265 139.803l-25.583-11.809L256 222.376l-41.682-94.382-25.583 11.809 51.749 116.191-51.749 116.192 25.583 11.808L256 289.613l41.682 94.381 25.583-11.808-51.749-116.192z'/%3e%3cpath d='M273.376 150.931C263.472 140.115 256 133.898 256 133.898s-7.472 6.216-17.376 17.032v210.127C248.528 371.873 256 378.091 256 378.091s7.472-6.216 17.376-17.033V150.931z'/%3e%3c/g%3e%3cpath d='M209.04 191.226v129.535c10.465 18.542 23.274 33.742 32.872 43.818V147.408c-9.599 10.076-22.408 25.275-32.872 43.818zm93.92 0c-10.465-18.543-23.274-33.742-32.872-43.818V364.58c9.599-10.077 22.407-25.276 32.872-43.818V191.226z' fill='%23A2001D'/%3e%3cpath d='M302.96 191.226v129.535c10.594-18.774 18.784-40.973 18.784-64.767s-8.19-45.993-18.784-64.768zm-93.92 0v129.535c-10.594-18.774-18.784-40.973-18.784-64.767s8.19-45.993 18.784-64.768z'/%3e%3c/svg%3e",
  KG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 342'%3e%3cg fill='%23D80027'%3e%3cpath d='M0 0h513v342H0z'/%3e%3ccircle cx='256' cy='170.7' r='170.7'/%3e%3c/g%3e%3cpath fill='%23FFDA44' d='M382.4 170.7L330.8 195l27.5 50-56.1-10.7-7.1 56.6-39.1-41.7-39.1 41.7-7.1-56.6-56.1 10.7 27.5-50-51.6-24.3 51.6-24.3-27.5-50.1 56.1 10.8 7.1-56.7L256 92.1l39.1-41.7 7.1 56.7 56.1-10.8-27.5 50.1z'/%3e%3ccircle fill='%23D80027' cx='257.4' cy='170.7' r='71.6'/%3e%3cpath d='M214.2 170.7c-2.1 0-4.1.1-6.2.3.1 12 4.4 22.9 11.6 31.5 3.8-10.3 9.5-19.6 16.7-27.7-6.9-2.7-14.3-4.1-22.1-4.1zm26.6 46.5c5.2 1.9 10.8 2.9 16.6 2.9 5.8 0 11.4-1 16.6-2.9-2.8-11.1-8.7-21-16.6-28.8-7.9 7.8-13.8 17.7-16.6 28.8zm59.4-71.2c-8.5-14.8-24.5-24.7-42.8-24.7-18.3 0-34.2 9.9-42.8 24.7 15.6.1 30.2 4.3 42.8 11.6 12.6-7.3 27.2-11.6 42.8-11.6zm-21.7 28.8c7.2 8 12.9 17.4 16.7 27.7 7.2-8.5 11.5-19.5 11.6-31.5-2-.2-4.1-.3-6.2-.3-7.7 0-15.2 1.4-22.1 4.1z' fill='%23FFDA44'/%3e%3c/svg%3e",
  KH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z' fill='%230052B4'/%3e%3cpath fill='white' d='M303.49 281.971v-17.809h-11.873v-23.745l-11.872-11.872-11.872 11.872v-23.744L256 204.8l-11.873 11.873v23.744l-11.872-11.872-11.872 11.872v23.745H208.51v17.809h-11.872v17.808h118.724v-17.808z'/%3e%3c/svg%3e",
  KI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 300'%3e%3cpath fill='%23CE1126' d='M0 0h450v300H0V0z'/%3e%3cg fill='%23FCD116'%3e%3ccircle cx='227.6' cy='161.2' r='56.2'/%3e%3cpath d='M254.1 73.4l-23.7 26 28.6 6.5zm-51.5.2l-4.8 33.1 28.5-8zm94.3 26.7l-34.7 8.5 20.1 23.7zm-138.3-1.8l15.5 32.7 20.2-22.7zm159 45.3l-34.4-9.9 5.6 29.5zm-182-2.6l31.9 19.8 5.2-27.7z'/%3e%3c/g%3e%3cpath fill='%23003F87' d='M0 175h450v125H0V175z'/%3e%3cpath fill='white' d='M0 267c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21z'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' fill='%23FCD116' d='M183.2 48.3l-1.1-5.3 22.4-3.7s-30.1-7.1-40-10.7c-14.3-5.1-16.3-12.1-16.3-12.1s44.7 11 64.8 11c4.3 0 12.8 10.7 12.8 10.7s14.8-14.9 21.9-15.4c32.1-2.3 66.6-6.4 66.6-6.4s-10 6.7-16 8.5c-16.2 4.9-50.6 11.7-50.6 11.7l-4.8 7.5H277l-14.4 4.3 7.4 6.9s-7.8-4.1-18.1-2.1c-7.1 1.3-15.4 6-22.9 8-18.7 4.8-29.9-12.8-29.9-12.8l-15.9-.1z'/%3e%3c/svg%3e",
  KM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v85.337H0z'/%3e%3cpath fill='white' d='M0 170.663h512V256H0z'/%3e%3cpath fill='%23D80027' d='M0 256h512v85.337H0z'/%3e%3cpath fill='%236DA544' d='M256 256.006L0 426.668V85.331z'/%3e%3cg fill='white'%3e%3cpath d='M68.638 256c0-24.865 17.476-45.638 40.812-50.734a52.059 52.059 0 00-11.13-1.208c-28.688 0-51.942 23.255-51.942 51.942s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.337-5.096-40.812-25.869-40.812-50.734z'/%3e%3cpath d='M108.877 211.478l2.762 8.503h8.94l-7.232 5.256 2.762 8.502-7.232-5.255-7.234 5.255 2.764-8.502-7.234-5.256h8.94zm0 22.261l2.762 8.503h8.94l-7.232 5.255 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.255h8.94zm0 22.261l2.762 8.503h8.94l-7.232 5.255 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.255h8.94zm0 22.261l2.762 8.502h8.94l-7.232 5.256 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.256h8.94z'/%3e%3c/g%3e%3c/svg%3e",
  KN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h513v342H0z'/%3e%3cpath fill='%236DA544' d='M512 0H0v342'/%3e%3cpath fill='%23FFDA44' d='M307.7 0L0 194.5V342h206.9L513 148.5V0z'/%3e%3cpath d='M513 0H385.2L0 249.4V341l126.2 1L513 91.6z'/%3e%3cpath d='M141.1 187l31.2 24 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.3-22.2zM310.6 70.8l31.2 23.9 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.4-22.2z' fill='white'/%3e%3c/svg%3e",
  KP: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%2391DC5A' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='white' d='M0 85.331h512v341.337H0z'/%3e%3cpath d='M0 85.331h512v57.188H0zM0 369.48h512v57.177H0z' fill='%230052B4'/%3e%3cpath fill='%23D80027' d='M0 165.215h512v181.582H0z'/%3e%3ccircle fill='white' cx='190.33' cy='255.994' r='65.668'/%3e%3cpath fill='%23D80027' d='M190.332 190.332l14.734 45.346h47.757l-38.65 28.028 14.849 45.481-38.69-28.16-38.631 28.107 14.79-45.428-38.616-28.028h47.722z'/%3e%3c/svg%3e",
  KR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3e%3cpath fill='white' d='M0 0h900v600H0z'/%3e%3cg transform='rotate(-56.31)'%3e%3cpath d='M-75 228.3H75m-150 37.5H75m-150 37.5H75m-150 475H75m-150 37.5H75m-150 37.5H75' stroke='black' stroke-width='25'/%3e%3cpath stroke='white' stroke-width='12.5' d='M0 753.3v125'/%3e%3ccircle fill='%23ca163a' cy='540.8' r='150'/%3e%3cpath fill='%230e4896' d='M0 390.8c-41.4 0-75 33.6-75 75s33.6 75 75 75 75 33.6 75 75-33.6 75-75 75c-82.8 0-150-67.2-150-150s67.2-150 150-150z'/%3e%3c/g%3e%3cpath d='M231.56 535.73l-83.205-124.808M262.76 514.928l-83.205-124.807m114.407 104.006l-83.205-124.808m478.43-138.675l-83.205-124.807M720.39 209.843L637.184 85.036m114.407 104.006L668.386 64.234' stroke='black' stroke-width='25'/%3e%3cpath stroke='white' stroke-width='12.5' d='M205.6 462.897l31.202-20.8m389.981-259.989l36.444-24.296m31.202-20.801l31.202-20.801'/%3e%3c/svg%3e",
  KW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23D80027' d='M0 312.888h512v113.775H0z'/%3e%3cpath d='M166.957 312.889L0 426.663V85.337l166.957 113.774z'/%3e%3c/svg%3e",
  KY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.334h512v341.337H0z'/%3e%3ccircle fill='%236DA544' cx='384' cy='181.79' r='29.682'/%3e%3cpath fill='%23D80027' d='M332.054 174.377h103.88v44.522h-103.88z'/%3e%3cpath fill='%23496E2D' d='M435.942 255.997v-.001.001z'/%3e%3cpath fill='%23FFDA44' d='M332.058 285.678v29.682h15.616c9.364 9.176 22.18 14.84 36.326 14.84 14.147 0 26.962-5.664 36.326-14.84h15.616v-29.682H332.058z'/%3e%3cpath fill='%23338AF3' d='M332.058 211.475v44.522c0 39.759 51.942 51.942 51.942 51.942s51.942-12.182 51.942-51.942v-44.522H332.058z'/%3e%3cpath d='M383.997 235.256c-12.985 0-12.985 11.873-25.97 11.873s-12.985-11.873-25.97-11.873v20.777c12.985 0 12.985 11.873 25.97 11.873s12.985-11.873 25.97-11.873c12.986 0 12.986 11.873 25.973 11.873 12.986 0 12.986-11.873 25.973-11.873v-20.777c-12.986 0-12.986 11.873-25.973 11.873-12.986-.001-12.986-11.873-25.973-11.873zm0-41.59c-12.985 0-12.985 11.873-25.97 11.873s-12.985-11.873-25.97-11.873v20.777c12.985 0 12.985 11.873 25.97 11.873s12.985-11.873 25.97-11.873c12.986 0 12.986 11.873 25.973 11.873 12.986 0 12.986-11.873 25.973-11.873v-20.777c-12.986 0-12.986 11.873-25.973 11.873-12.986 0-12.986-11.873-25.973-11.873z' fill='%23F3F3F3'/%3e%3cpath fill='white' d='M256 85.334v22.617l-46.069 30.709H256v64h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144 85.329h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z'/%3e%3cpath d='M0 85.329v15.082l57.377 38.252H80zm256 0v15.082l-57.377 38.252H176z'/%3e%3cpath d='M0 85.329v15.082l57.377 38.252H80zm256 0v15.082l-57.377 38.252H176zM0 255.997v-15.082l57.377-38.252H80zm256 0v-15.082l-57.377-38.252H176z'/%3e%3c/g%3e%3c/svg%3e",
  KZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%2336B6CC' d='M0 0h513v342H0V0z'/%3e%3ccircle fill='%23FFD400' cx='256.5' cy='170.9' r='68.4'/%3e%3cpath fill='%23FFD400' d='M256.5 251.5l-27.9 41.7-7.1-49.7-43.2 25.5 15.2-47.8-50 4.2 34.4-36.5-46.9-18 46.8-18-34.4-36.5 50 4.2-15.2-47.8 43.2 25.4 7.1-49.7 27.9 41.7 27.9-41.7 7.1 49.7 43.2-25.4-15.2 47.8 50-4.2-34.3 36.6 46.8 17.9-46.8 18 34.4 36.5-50-4.2 15.2 47.8-43.2-25.4-7.1 49.7c0-.1-27.9-41.8-27.9-41.8zm0-.8c44.1 0 79.9-35.8 79.9-79.9S300.6 91 256.5 91s-79.9 35.8-79.9 79.9 35.8 79.8 79.9 79.8zM22.8 28.3c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V28.3zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V74zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm22.8-22.8c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7V245c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V188zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V96.8zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V51.2z'/%3e%3c/svg%3e",
  LA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%230052B4' d='M0 0h513v342H0z'/%3e%3cpath d='M0 .1h513v90.7H0zm0 251.2h513V342H0z' fill='%23D80027'/%3e%3ccircle fill='white' cx='256.5' cy='171' r='65.9'/%3e%3c/svg%3e",
  LB: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 .2h513v90.7H0zm.5 251.1H513V342H.5z' fill='%23D80027'/%3e%3cpath fill='%236DA544' d='M290.3 193.5L256 130.7l-34.3 62.8h25.7v17.2h17.2v-17.2z'/%3e%3cpath fill='%2314AF5A' d='M241.3 213.1c4.4-4.4 4.4-11.6-.1-16l4.7 4.7c-5.2-4.7-12.2-6.6-19.1-5.3l-23.5 5.9c-6.1 1.5-6.8-.4-1.8-4.2l27.1-20.3c5.1-3.8 4.2-6.9-2.3-6.9h-11c-6.4 0-7-2.3-1.5-5.1l25.3-12.7c5.6-2.8 5.1-5.1-1.5-5.1h-11c-6.4 0-7.4-3.1-2.3-6.9l27.1-20.3c5.6-3.8 12.9-3.8 18.5 0l27.1 20.3c5.1 3.8 4.2 6.9-2.3 6.9h-11c-6.4 0-7 2.3-1.5 5.1l25.3 12.7c5.6 2.8 5.1 5.1-1.5 5.1h-11c-6.4 0-7.4 3.1-2.3 6.9l27.1 20.3c5.1 3.8 4.4 5.7-1.8 4.2l-23.5-5.9c-6.8-1.3-13.9.6-19.1 5.3l4.7-4.7c-4.4 4.4-4.5 11.5-.1 16l6.8 6.8c4.4 4.4 3.1 8-3.3 8h-45.8c-6.2 0-7.7-3.6-3.3-8 .1.1 6.9-6.8 6.9-6.8z'/%3e%3c/svg%3e",
  LC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%2355B2FF' d='M0 0h513v342H0z'/%3e%3cpath fill='%23F3F3F3' d='M148.5 298.1h216l-108-254.2z'/%3e%3cpath fill='%23333' d='M186 272.7l70.5-160.3L327 272.7z'/%3e%3cpath fill='%23FFDA44' d='M148.5 298.1h216l-108-101.7z'/%3e%3c/svg%3e",
  LI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h513v342H0z'/%3e%3cpath fill='%230052B4' d='M0 0h513v171H0z'/%3e%3cpath fill='%23FFDA44' d='M149.3 98.1c0-14-11.3-25.3-25.3-25.3-6.5 0-12.4 2.4-16.9 6.4V64.4h8.4V47.5h-8.4v-8.4H90.3v8.4h-8.4v16.9h8.4v14.9c-4.5-4-10.4-6.4-16.9-6.4-14 0-25.3 11.3-25.3 25.3 0 7.5 3.3 14.2 8.4 18.8v14.9h84.3V117c5.3-4.7 8.5-11.5 8.5-18.9z'/%3e%3c/svg%3e",
  LK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23FFDA44' d='M0 0h513v342H0z'/%3e%3cpath fill='%23A2001D' d='M222.6 22.3h267.1v296.8H222.6z'/%3e%3cpath fill='%23D80027' d='M22.3 22.3h200.3v296.8H22.3z'/%3e%3cpath fill='%23FFDA44' d='M200.3 0h22.3v342h-22.3z'/%3e%3cpath fill='%236DA544' d='M22.3 22.3h89v296.8h-89z'/%3e%3cpath fill='%23FF9811' d='M111.3 22.3h89v296.8h-89z'/%3e%3cpath fill='%23FFDA44' d='M368.2 156.8c-1.4-2 0-37.9 0-37.9.9-7.4.1-8.4 1-11.4.9-2.9 5.4-11.6 5.4-11.6s-6-2.3-10.3-.6c-4.3 1.7-24.7-7.5-31.2 3.4-4.4 7-23.6 16.2-24.6 14-1-2.2-5.9-5-6.9-2.9s-.7 13.9 0 16c.8 2.6 9.8 2 12.3 3.1 3.7 1.8 12.2 8.2 11.9 10.7-.3 2.5-22.5-6-24.2-4.5-1.4 1.2-1.9 13.2-.4 15 1.8 2.1 23.4 5.6 25 7.5 1.6 1.9-13.1 7.4-12.3 25 .7 14.7 8 17.4 8 17.4s-2.4 3.6-7.8 3.1c-6.2-.6-27.4-17.7-27.4-17.7s-3.5-109 3.6-121.4c4.9-8.5-22.7 10.1-22.7 50.8V151c0 6.6-1.4 22.4 2.6 34 0 0-.4 46.9 1.5 49.6s12.7 2.2 14.8 0 0-30 0-30c7.7.2 18.3 17.5 32.5 16.4 20.6-1.6 28.7-9.9 34.3-5 8.1 7.1 5.5 23.2.4 31.5-2.2 3.5-14.3 4.7-15.7 7.6-1.4 2.9.5 5.4.5 5.4h29.7s1.4-20.5 2.7-26.1c1.3-5.7-.6-10.7 5.9-10.4 23.5 1.1 39.8-15.3 45.5-8 3.2 4.1 5.6 29.9 3.3 33.3-2.2 3.4-13.8 2.8-15.2 6.7-1.4 4 .8 4.4.8 4.4h29.7s-.4-21.2 2.5-27.7 4.9-10.4 9.3-17.2c4.4-6.8 11.3-15.7 11.3-36.2 0-14.2-8.1-22.8-8.1-22.8H417c-14.1.2-47.4 2.3-48.8.3zm-136-124.5c10.7-10.6 20.2-2.7 22.2 2.1 1.9 4.8 2.1 8.2 2.8 13.6.9 6.9 4.9 14 4.9 14s-7.1-3.8-14.7-4.2c-4.7-.3-9-.6-13.6-2.5-5.7-2.3-11.7-12.9-1.6-23zm248.4-.1c10.7 10.6 2.8 20.2-2 22.2s-8.2 2.1-13.6 2.8c-6.9.9-14 5-14 5s3.7-7.1 4.2-14.7c.3-4.7.6-9.1 2.4-13.6 2.2-5.7 12.8-11.8 23-1.7zm.1 276.9c-10.7 10.6-20.2 2.6-22.2-2.2-1.9-4.8-2.1-8.2-2.7-13.6-.8-6.9-4.9-14.1-4.9-14.1s7 3.8 14.7 4.3c4.7.3 9 .6 13.6 2.5 5.7 2.4 11.7 13.1 1.5 23.1zm-248.2-.1c-10.6-10.7-2.7-20.2 2.1-22.2 4.8-1.9 8.2-2.1 13.6-2.8 6.9-.9 14-4.9 14-4.9s-3.8 7.1-4.2 14.7c-.3 4.7-.6 9-2.5 13.6-2.3 5.7-12.9 11.8-23 1.6z'/%3e%3cpath fill='none' stroke='%23FFDA44' stroke-width='6' stroke-miterlimit='10' d='M446.9 162.4s7.5-2.6 8.4-16.1c.6-8.6-19.8-16-39-11.5-19.7 4.6-34-3.1-34-14.6 0-22.9 29.7-16.2 38.9-11.3 9.1 4.9 29.7 23.5 35.1 9.4'/%3e%3c/svg%3e",
  LR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath d='M0 0h512v31.1H0zm0 62.2h512v31.1H0zm0 62.3h512v31.1H0zm0 62.3h512v31.1H0zm0 62.5h512v31.1H0zm0 61.6h512V342H0z' fill='%23bf0a30'/%3e%3cpath fill='%23002868' d='M0 0h155.6v155.6H0z'/%3e%3cpath fill='white' d='M77.8 30.2l10.7 32.9h34.6l-28 20.4 10.7 32.9-28-20.3-28 20.3 10.7-32.9-28-20.4h34.6z'/%3e%3c/svg%3e",
  LS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%230052B4' d='M0 0h513v114H0z'/%3e%3cpath fill='%236DA544' d='M0 227.6h513v114H0z'/%3e%3cpath d='M245.2 171l7.7-23.1c2-5.9 5.1-6 7.1 0l7.7 23.1 19.4 29.1c1.7 2.6 1.3 6.3-1.2 8 0 0-6.9 8-29.5 8s-29.5-8-29.5-8c-2.4-2-2.9-5.4-1.2-8l19.5-29.1z'/%3e%3cpath d='M256.5 171c-12.5 0-22.6-10.1-22.6-22.6 0-12.5 10.1-22.6 22.6-22.6s22.6 10.1 22.6 22.6c0 12.5-10.2 22.6-22.6 22.6zm0 0c6.2 0 11.3-16.3 11.3-22.6 0-6.2-5.1-11.3-11.3-11.3-6.2 0-11.3 5.1-11.3 11.3 0 6.3 5 22.6 11.3 22.6z'/%3e%3c/svg%3e",
  LT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%236DA544' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23D80027' d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  LU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23338AF3' d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  LV: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath class='prefix__st1' d='M0 0h513v127.6H0zm0 214.4h513V342H0z' fill='%23A2001D'/%3e%3c/svg%3e",
  LY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23496E2D' d='M0 312.888h512v113.775H0z'/%3e%3cg fill='white'%3e%3cpath d='M281.424 236.026l8.962 12.35 14.513-4.706-8.975 12.339 8.961 12.349-14.509-4.724-8.976 12.34.01-15.258-14.51-4.725 14.514-4.706z'/%3e%3cpath d='M256.965 286.868c-17.048 0-30.868-13.821-30.868-30.868s13.821-30.868 30.868-30.868a30.742 30.742 0 0114.684 3.71c-6.851-6.698-16.218-10.833-26.556-10.833-20.982 0-37.992 17.01-37.992 37.992s17.01 37.992 37.992 37.992c10.338 0 19.706-4.135 26.556-10.833a30.738 30.738 0 01-14.684 3.708z'/%3e%3c/g%3e%3c/svg%3e",
  MA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.337v341.326h512V85.337z'/%3e%3cpath fill='%2320661b' d='M352 226.484h-73.337L256 156.738l-22.663 69.748H160l59.331 43.107-22.663 69.749L256 296.232l59.332 43.107-22.663-69.749L352 226.484zm-116.063 37.711l7.663-23.585h24.8l7.663 23.585v.001L256 278.772l-20.063-14.577zm27.873-37.711h-15.619L256 202.447l7.81 24.037zm24.269 28.982l-4.827-14.856h25.274l-20.447 14.856zm-59.331-14.856l-4.827 14.856-20.447-14.856h25.274zm-5.211 61.748l7.81-24.036 12.636 9.181-20.446 14.855zm44.479-14.856l12.636-9.181 7.81 24.036-20.446-14.855z'/%3e%3c/svg%3e",
  MC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.333h512v341.333H0z'/%3e%3cpath fill='%23c70000' d='M0 85.333h512V256H0z'/%3e%3c/svg%3e",
  MD: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23FFDA44' d='M0 0h513v342H0z'/%3e%3cpath fill='%23D80027' d='M342 0h171v342H342z'/%3e%3cpath fill='%230052B4' d='M0 0h171v342H0z'/%3e%3cpath fill='%23AF7F59' d='M206.2 129.1h33.2L256 79.3l16.6 49.8h33.2v99.6L256 262l-49.8-33.2v-99.7zm33.2 33.3v49.8h33.2v-49.8h-33.2z'/%3e%3c/svg%3e",
  ME: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23E6BE53' d='M0 0h513v342H0z'/%3e%3cpath fill='%23E01D24' d='M20 20h473v302H20z'/%3e%3cpath fill='%23E6BE53' d='M248.5 112.9c4.4 4.4 11.6 4.4 16 0l-4.7 4.7 22.7-22.7c4.9-4.5 12.1-5.6 18.2-2.8l2.1 1c5.7 2.9 6.7 8.7 2.3 13.1l4.7-4.7-22.8 22.8c-4.5 4.9-5.6 12.1-2.8 18.2l1 2.1c2.9 5.7 5.1 15.4 5.1 21.6v-11.3c0 6.2 4.4 9.1 10.2 6.2l2.1-1c5.7-2.9 6.7-8.7 2.3-13.1l4.7 4.7c-4.4-4.4-4.4-11.6 0-16l-4.7 4.7c5.2-5.5 9.6-11.6 13.1-18.2l1-2.1c2.9-5.7 6.3-15.1 7.9-21.2l5.8-23.3c1.5-6 5.9-6.8 9.6-1.8l20.2 26.9c3.8 5.1 6.9 14 6.9 20.6v22.4c0 6.3-2.2 15.8-5.1 21.7l-1 2.1c-3.5 6.6-7.9 12.7-13.1 18.2l-6.8 6.8c-5.4 5.2-11.5 9.6-18.2 13.1l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.2 0-6.9 2.2-1.1 5.1l2.1 1c5.7 2.9 13.8 8.7 18.2 13.1l-4.7-4.7c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L339 226c4.6 4.9 5.7 12.1 2.9 18.2l-1 2.1c-2.9 5.7-10.4 10.2-16.4 10.2-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.5-3.6-11.8-8.9-15.4-15.4l-1-2.1c-2.9-5.7-8.7-6.7-13.1-2.3l4.7-4.7c-4.4 4.7-5.2 11.8-1.8 17.3l10.3 15.4c3.4 5.1 2 12.1-3.1 15.5L266 284.4c-5.7 3.4-12.8 3.4-18.6 0L232 274.1c-5.1-3.4-6.5-10.3-3.1-15.5l10.3-15.4c3.4-5.5 2.6-12.6-1.8-17.3l4.7 4.7c-4.4-4.4-10.2-3.6-13.1 2.3l-1 2.1c-2.9 5.7-9.5 12.4-15.4 15.4l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.9-.3-13.1-4.2-16.4-10.2l-1-2.1c-2.8-6.1-1.6-13.3 2.9-18.2l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L181 226c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c5.5-5.2 11.6-9.6 18.2-13.1l2.1-1c5.7-2.9 5-5.1-1.1-5.1-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.6-3.5-12.7-7.9-18.2-13.1l-6.8-6.8c-5.2-5.4-9.6-11.5-13.1-18.2l-1-2.1c-3.1-6.8-4.9-14.2-5.1-21.7V121c0-6.3 3.1-15.6 6.9-20.6l20.2-26.9c3.8-5.1 8.1-4.3 9.6 1.8l5.8 23.3c2 7.3 4.6 14.4 7.9 21.2l1 2.1c2.9 5.7 8.7 13.8 13.1 18.2l-4.7-4.7c4.4 4.4 4.4 11.6 0 16l4.7-4.7c-4.4 4.4-3.6 10.2 2.3 13.1l2.1 1c5.7 2.9 10.2 0 10.2-6.2v11.3c0-6.2 2.2-15.7 5.1-21.6l1-2.1c2.8-6.1 1.7-13.2-2.8-18.2l-22.7-22.7 4.7 4.7c-4.4-4.4-3.6-10.2 2.3-13.1l2.1-1c6.1-2.8 13.2-1.7 18.2 2.8l22.7 22.7-4.8-4.5zm-18-40.7c-4.4-4.4-3.2-9.5 2.8-11.5l12.4-4.2c6-2 15.5-2 21.5 0l12.4 4.2c6 2 7.2 7.1 2.8 11.5l-6.8 6.8c-5.3 4.7-12.1 7.5-19.2 7.9-6.2 0-14.8-3.5-19.2-7.9.1 0-6.7-6.8-6.7-6.8z'/%3e%3cpath fill='%23215F90' d='M233.9 200.2c0 6.2 1.7 6.4 4.2.5 0 0 7.1-23.2 18.4-23.2 11.3 0 18.6 23.6 18.6 23.6 2.2 5.7 4 5.3 4-1.1v-11.2c0-18.7-10.1-33.9-22.6-33.9-12.5 0-22.6 15.2-22.6 33.9v11.4z'/%3e%3c/svg%3e",
  MF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 72'%3e%3cpath d='M0 0h108v72H0z' fill='%23003787'/%3e%3cpath d='M0 0h108L60 48v24H48V48z' fill='white'/%3e%3ccircle cx='54' cy='30' r='8' fill='%23f9d90f'/%3e%3cpath d='M44 30h20L54 48z' fill='white'/%3e%3cpath d='M54 48L38 33h32z' fill='%23cf142b'/%3e%3c/svg%3e",
  MG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%236DA544' d='M512 426.666V85.329H0v341.337h512z'/%3e%3cpath fill='%23D80027' d='M512 85.331H0v170.666h512V85.331z'/%3e%3cpath fill='white' d='M0 85.334h181.793v341.337H0z'/%3e%3c/svg%3e",
  MH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%231E509C' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M513 176.1V81.3L0 342l513-165.9z'/%3e%3cpath fill='%23F18D36' d='M513 0v81.3L0 342 513 0z'/%3e%3cpath fill='white' d='M126.7 99.3l-7.8-54.1-7.7 54.1-20.8-23.7 10.7 31.6-31.5-10.7 23.6 20.8-54.1 7.7 54.1 7.7-23.6 20.8 31.5-10.7-10.7 31.6 20.8-23.7 7.7 54.1 7.8-54.1 20.7 23.7-10.6-31.6 31.5 10.7-23.6-20.8 54-7.7-54-7.7 23.6-20.8-31.5 10.7 10.6-31.6z'/%3e%3c/svg%3e",
  MK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.333h512V426.67H0z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M383.875 426.662L256 252.286l26.827 174.376zM133.565 85.33L256 252.286 230.314 85.33zm95.606 341.332L256 252.286 128.124 426.662zM0 85.33V212.9l256 39.386L28.333 85.33zm0 341.332h18.212L256 252.286 0 291.67zm256-174.376L512 212.9V85.33h-28.331zM281.686 85.33L256 252.286 378.434 85.33zM512 426.662V291.671l-256-39.385 237.787 174.376z'/%3e%3ccircle cx='256' cy='252.29' r='59.359'/%3e%3c/g%3e%3ccircle fill='%23FFDA44' cx='256' cy='252.29' r='44.522'/%3e%3c/svg%3e",
  ML: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%236DA544' d='M0 85.331h170.663v341.337H0z'/%3e%3cpath fill='%23D80027' d='M341.337 85.331H512v341.337H341.337z'/%3e%3c/svg%3e",
  MM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%236DA544' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23D80027' d='M0 312.888h512v113.775H0z'/%3e%3cpath fill='white' d='M384 227.261h-97.783L256 134.265l-30.217 92.997H128l79.108 57.475-30.217 92.998L256 320.925l79.108 56.81-30.217-92.998L384 227.261z'/%3e%3c/svg%3e",
  MN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23095FAD' d='M0 0h513v342H0z'/%3e%3cpath d='M342 0h171v342H342zM0 0h171v342H0z' fill='%23BE1229'/%3e%3cg fill='%23FFDA44'%3e%3cpath d='M108.3 166.3h14.8v74.2h-14.8zm-59.4 0h14.8v74.2H48.9z'/%3e%3ccircle cx='86' cy='203.4' r='14.8'/%3e%3cpath d='M71.2 225.7h29.7v14.8H71.2zm0-59.4h29.7v14.8H71.2z'/%3e%3ccircle cx='86' cy='144' r='14.8'/%3e%3cpath d='M76.3 123.9h19.5L86 108.3z'/%3e%3c/g%3e%3c/svg%3e",
  MO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%2300745a' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='white' d='M285.682 248.878c-4.19 0-8.166.836-11.861 2.164 2.023-4.509 3.379-9.527 3.379-14.885 0-21.201-21.201-37.101-21.201-37.101s-21.201 15.901-21.201 37.101c0 5.357 1.356 10.375 3.379 14.885-3.693-1.328-7.671-2.164-11.861-2.164-21.201 0-37.101 21.201-37.101 21.201s15.901 21.201 37.101 21.201c12.429 0 23.031-7.286 29.682-13.315 6.65 6.03 17.251 13.315 29.682 13.315 21.201 0 37.101-21.201 37.101-21.201s-15.899-21.201-37.099-21.201z'/%3e%3cpath d='M256 152.111l4.38 13.476h14.171l-11.464 8.332 4.376 13.476-11.463-8.33-11.463 8.33 4.376-13.476-11.464-8.332h14.171zm-53.888 23.572l8.425 7.585 9.818-5.667-4.61 10.355 8.423 7.588-11.274-1.185-4.611 10.355-2.358-11.088-11.275-1.185 9.818-5.669zm-39.45 39.449l11.09 2.358 5.668-9.818 1.186 11.274 11.089 2.358-10.357 4.61 1.186 11.274-7.587-8.423-10.357 4.61 5.669-9.818zm147.227-39.449l-8.425 7.585-9.818-5.667 4.611 10.355-8.425 7.588 11.275-1.185 4.61 10.355 2.359-11.088 11.275-1.185-9.818-5.669zm39.449 39.449l-11.089 2.358-5.669-9.818-1.186 11.274-11.088 2.358 10.357 4.61-1.185 11.274 7.586-8.423 10.357 4.61-5.669-9.818z' fill='%23FFDA44'/%3e%3cpath d='M256 350.642c16.84 0 32.363-5.619 44.816-15.073h-89.63c12.451 9.454 27.974 15.073 44.814 15.073zm-68.023-44.522a74.138 74.138 0 008.85 15.073h118.345a74.13 74.13 0 008.85-15.073H187.977z' fill='white'/%3e%3c/svg%3e",
  MP: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 750 500'%3e%3cpath fill='%230071BC' d='M0 0h750v500H0V0z'/%3e%3cg fill='white' stroke='black' stroke-width='1.9'%3e%3ccircle cx='375' cy='245' r='225' fill='white'/%3e%3ccircle cx='375' cy='245' r='165' fill='%230071BC'/%3e%3c/g%3e%3cg stroke='black'%3e%3cpath fill='%238C8A8C' stroke-width='1.9' d='M444.7 450c.7 11-7.8 20-18.8 20H323.6c-11 0-19.5-9-19-20l16.7-325c.6-11 10-20 21-20h61.4c11 0 20.5 9 21.2 20l19.8 325z'/%3e%3cpath fill='white' stroke-width='2' stroke-linejoin='round' d='M373 114l30 93h97l-78 56 29 92-78-56-78 57 30-93-79-57h97l30-92z'/%3e%3c/g%3e%3c/svg%3e",
  MQ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%230052B4' d='M0 0h513v342H0z'/%3e%3cg fill='white'%3e%3cpath d='M512 148.4v44.5H278.3v148.4h-44.6V192.9H0v-44.5h233.7V0h44.6v148.4z'/%3e%3cpath d='M101 36.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm284 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm-5.4 199c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7s3.4 6.5 7 6.3l1.7-.1zm-278.6 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8s4.2 5.9 7.8 5.2c.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1z'/%3e%3c/g%3e%3c/svg%3e",
  MR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23496E2D' d='M0 85.331h512v341.337H0z'/%3e%3cg fill='%23FFDA44'%3e%3cpath d='M256 298.851c-45.956 0-84.348-32.298-93.767-75.429A96.288 96.288 0 00160 243.994c0 53.02 42.979 96 96 96s96-42.98 96-96c0-7.066-.785-13.942-2.233-20.572-9.419 43.131-47.811 75.429-93.767 75.429z'/%3e%3cpath d='M255.999 171.994l8.935 27.502h28.918l-23.394 16.996 8.936 27.503-23.395-16.998-23.394 16.998 8.937-27.503-23.394-16.996h28.915z'/%3e%3c/g%3e%3c/svg%3e",
  MS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%231B4991' d='M0 0h513v342H0z'/%3e%3cpath fill='%2300A2B8' stroke='white' stroke-width='3' d='M318.2 106.7v106.5c0 51.9 67.8 67.8 67.8 67.8s67.8-15.9 67.8-67.8V106.7H318.2z'/%3e%3cpath fill='%23A35023' d='M319.7 212.7c0 50.8 66.3 66.3 66.3 66.3s66.3-15.6 66.3-66.3H319.7z'/%3e%3cpath d='M415.1 155.1h-19.4v-19.4h-19.4v19.4H357v19.4h19.3v58.1h19.4v-58.1h19.4z'/%3e%3cpath fill='white' d='M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z'/%3e%3cpath fill='%23D80027' d='M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z'/%3e%3cpath fill='%230052B4' d='M155.8 115L256 170.7v-15.8L184.2 115z'/%3e%3cpath fill='white' d='M155.8 115L256 170.7v-15.8L184.2 115z'/%3e%3cpath fill='%23D80027' d='M155.8 115L256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z'/%3e%3cpath fill='%230052B4' d='M100.2 55.6L0 0v15.7l71.8 39.9z'/%3e%3cpath fill='white' d='M100.2 55.6L0 0v15.7l71.8 39.9z'/%3e%3cpath fill='%23D80027' d='M100.2 55.6L0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z'/%3e%3c/svg%3e",
  MT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath fill='%23C31B28' d='M256 0h256.5v342H256z'/%3e%3cpath fill='%23ACABB1' stroke='%23C31B28' stroke-width='2' d='M101.2 68.2V33H66v35.2H30.8v35.2H66v35.2h35.2v-35.2h35.2V68.2z'/%3e%3c/svg%3e",
  MU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23f7ce00' d='M0 85.331h512v341.326H0z'/%3e%3cpath fill='%23e32737' d='M0 85.331h512v85.337H0z'/%3e%3cpath fill='%23191f6a' d='M0 170.657h512v85.337H0z'/%3e%3cpath fill='%2300a04e' d='M0 341.331h512v85.337H0z'/%3e%3c/svg%3e",
  MV: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23d01920' d='M0 85.331h512v341.333H0z'/%3e%3cpath fill='%23017c3b' d='M144.696 174.375h222.609v163.25H144.696z'/%3e%3cpath fill='white' d='M283.484 304.226c-26.637 0-48.232-21.594-48.232-48.232s21.594-48.232 48.232-48.232c8.306 0 16.12 2.1 22.943 5.797-10.703-10.467-25.341-16.927-41.494-16.927-32.784 0-59.362 26.577-59.362 59.362s26.578 59.362 59.362 59.362c16.154 0 30.791-6.461 41.494-16.927-6.822 3.698-14.636 5.797-22.943 5.797z'/%3e%3c/svg%3e",
  MW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 342'%3e%3cpath fill='%23272727' d='M0 0h512v114H0z'/%3e%3cpath fill='%23e40112' d='M0 114h512v114H0z'/%3e%3cpath fill='%2307893f' d='M0 228h512v114H0z'/%3e%3ccircle fill='%23e40112' cx='256' cy='125' r='95'/%3e%3c/svg%3e",
  MX: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23dc2339' d='M342 0H0v341.3h513V0z'/%3e%3cpath fill='%2311865d' d='M0 0h171v342H0z'/%3e%3cpath fill='white' d='M171 0h171v342H171z'/%3e%3cpath fill='%238C9157' d='M195.8 171.2c0 21.6 11.5 41.7 30.3 52.5 5.8 3.4 13.2 1.4 16.6-4.4 3.4-5.8 1.4-13.2-4.4-16.6-11.3-6.5-18.2-18.5-18.2-31.5 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.2 5.4-12.2 12.1zm93.4 51.1c17.5-11.1 28-30.4 28-51.1 0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1c0 12.4-6.3 24-16.8 30.7-5.7 3.5-7.5 10.9-4.1 16.7s10.9 7.5 16.7 4.1c0-.2.2-.3.4-.4z'/%3e%3cellipse fill='%23C59262' cx='256.5' cy='159.1' rx='24.3' ry='36.4'/%3e%3c/svg%3e",
  MY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 0h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0zm0 48.9h513V171H0zm0 48.8h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0z' fill='%23c00'/%3e%3cpath fill='%23006' d='M0 0h256.5v195.4H0z'/%3e%3cpath d='M153.3 42.1C122.6 30.7 88.5 46.3 77.1 77s4.2 64.8 34.9 76.2c13.3 5 28 5 41.4 0-30.7 24.5-75.4 19.6-100-11.1s-19.6-75.4 11.1-100c26-20.7 62.9-20.7 88.8 0zm26.7 75l-20.6 23.3 5.4-30.6-31-1.6 27.3-14.9L143 68l28.6 12 8.4-29.9 8.4 29.9L217 68l-18 25.4 27.3 14.9-31 1.6 5.4 30.6-20.7-23.4z' fill='%23fc0'/%3e%3c/svg%3e",
  MZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 513 342'%3e%3cpath fill='white' d='M0 85.333h513v342H0z'/%3e%3cpath fill='%23f4d900' d='M0 323.333h513v104H0z'/%3e%3cpath fill='%23006d66' d='M0 85.333h513v104H0z'/%3e%3cpath d='M0 204.333h513v104H0z'/%3e%3cpath fill='%23cb0f31' d='M256 256.006L0 426.668V85.331z'/%3e%3cpath fill='%23f4d900' d='M83.477 195.132l15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z'/%3e%3c/svg%3e",
  NA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23496E2D' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M0 426.663V85.337h512'/%3e%3cpath fill='white' d='M512 152.222V85.337H411.67L0 359.778v66.885h100.33z'/%3e%3cpath fill='%23A2001D' d='M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z'/%3e%3cpath fill='%23FFDA44' d='M187.737 189.212l-22.741 10.696 12.11 22.024-24.693-4.724-3.129 24.945-17.199-18.347-17.2 18.347-3.129-24.945-24.693 4.723 12.109-22.023-22.739-10.696 22.74-10.697-12.11-22.022 24.693 4.722 3.13-24.944 17.199 18.347 17.2-18.347 3.128 24.944 24.693-4.722-12.108 22.024z'/%3e%3c/svg%3e",
  NC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 426.7'%3e%3cpath fill='%23009543' d='M0 293h640v133.7H0V293z'/%3e%3cpath fill='%23ED4135' d='M0 132h640v161.3H0V132z'/%3e%3cpath fill='%230035AD' d='M0 0h640v133.3H0V0z'/%3e%3ccircle fill='%23FAE600' stroke='black' stroke-width='5.3' cx='240' cy='213.3' r='157.3'/%3e%3cpath d='M307.9 354.5l-31.8 12-36.1 4.2-37.8-2.4-35.9-15.5s28.6-29.3 40.7-33.5c8.6-3 22.4-3.7 22.4-3.7V122l-.3-66H246l-.5 67.5v191.7s15.3 1.2 22.1 4.1c11.3 4.9 40.3 35.2 40.3 35.2z'/%3e%3cpath d='M212.727 102.375l42.955-21.418 5.577 11.187-42.955 21.417z'/%3e%3cellipse cx='237.8' cy='280.5' rx='16.8' ry='26.5'/%3e%3ccircle cx='237.4' cy='143.4' r='20.9'/%3e%3cellipse cx='238.4' cy='211.1' rx='19.9' ry='12.1'/%3e%3cpath d='M213.8 177h47v10h-47zm0 57h47v10h-47z'/%3e%3c/svg%3e",
  NE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23e05206' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%230db02b' d='M0 312.888h512v113.775H0z'/%3e%3ccircle fill='%23e05206' cx='256' cy='256' r='32'/%3e%3c/svg%3e",
  NF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.5 513 342'%3e%3cpath fill='white' d='M0 85.5h513v342H0z'/%3e%3cpath d='M0 85.5h171v342H0zm342 0h171v342H342zm-38 226.495l-48-152.001-48 152.001h36v39.999h24v-39.999z' fill='%23007b23'/%3e%3c/svg%3e",
  NG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.5 513 342'%3e%3cpath fill='white' d='M0 85.5h513v342H0z'/%3e%3cpath d='M0 85.5h171v342H0zm342 0h171v342H342z' fill='%23007b23'/%3e%3c/svg%3e",
  NI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z' fill='%23338AF3'/%3e%3cpath fill='%23FFDA44' d='M256 214.447c-22.949 0-41.553 18.603-41.553 41.553S233.05 297.553 256 297.553c22.949 0 41.553-18.603 41.553-41.553S278.949 214.447 256 214.447zm0 65.298c-13.114 0-23.745-10.631-23.745-23.745s10.631-23.745 23.745-23.745 23.745 10.631 23.745 23.745-10.631 23.745-23.745 23.745z'/%3e%3cpath fill='%230052B4' d='M276.563 261.936L256 256l-20.563 5.936-6.855 11.873h54.836z'/%3e%3cpath fill='%23338AF3' d='M256 226.32l-13.709 23.744L256 256l13.709-5.936z'/%3e%3cpath fill='%236DA544' d='M235.437 261.936h41.126l-6.854-11.872h-27.418z'/%3e%3c/svg%3e",
  NL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.5 513 342'%3e%3cpath fill='white' d='M0 85.5h513v342H0z'/%3e%3cpath fill='%23cd1f2a' d='M0 85.5h513v114H0z'/%3e%3cpath fill='%231d4185' d='M0 312h513v114H0z'/%3e%3c/svg%3e",
  NO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.334h512v341.337H0z'/%3e%3cpath fill='white' d='M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z'/%3e%3cpath fill='%232E52B2' d='M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z'/%3e%3c/svg%3e",
  NP: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M0 426.663V85.337l280.419 174.75H87.61l183.576 166.576z'/%3e%3cpath fill='%23D80027' d='M244.769 249.888L10.199 103.71v312.754h234.57L61.193 249.888z'/%3e%3cg fill='white'%3e%3cpath d='M98.003 324.433l-14.589-6.863 7.77-14.13-15.844 3.03-2.008-16.005-11.035 11.772-11.036-11.772-2.008 16.005-15.843-3.031 7.77 14.131-14.591 6.863 14.591 6.862-7.77 14.13 15.844-3.029 2.007 16.004 11.036-11.772L73.332 358.4l2.008-16.004 15.843 3.03-7.769-14.13zm-9.735-132.771l-10.612-4.991 5.651-10.278-11.523 2.205-1.461-11.641-8.026 8.561-8.026-8.561-1.46 11.641-11.525-2.205 5.652 10.278-10.613 4.991 25.972 5.194z'/%3e%3cpath d='M93.462 191.662c0 17.212-13.953 31.165-31.165 31.165s-31.165-13.953-31.165-31.165'/%3e%3c/g%3e%3c/svg%3e",
  NR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23FFDA44' d='M0 239.994h512v32H0z'/%3e%3cpath fill='white' d='M174.802 341.329l-19.124 8.996 10.184 18.521-20.767-3.973-2.631 20.978L128 370.422l-14.465 15.429-2.63-20.978-20.767 3.973 10.183-18.521-19.123-8.996 19.124-8.995-10.184-18.52 20.766 3.971 2.632-20.978L128 312.236l14.465-15.429 2.63 20.978 20.767-3.971-10.183 18.521z'/%3e%3c/svg%3e",
  NU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.334h512v341.337H0z'/%3e%3cpath fill='white' d='M0 85.334h256v170.663H0z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z'/%3e%3cpath d='M0 85.329v15.083l57.377 38.251H80z'/%3e%3c/g%3e%3cpath d='M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z' fill='%232E52B2'/%3e%3cpath fill='%23D80027' d='M256 85.329v15.083l-57.377 38.251H176z'/%3e%3cpath d='M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z' fill='%232E52B2'/%3e%3cpath fill='%23D80027' d='M0 85.329v15.083l57.377 38.251H80z'/%3e%3cpath d='M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z' fill='%232E52B2'/%3e%3cpath fill='%23D80027' d='M256 85.329v15.083l-57.377 38.251H176z'/%3e%3cpath d='M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z' fill='%232E52B2'/%3e%3cpath fill='%23D80027' d='M0 255.997v-15.082l57.377-38.252H80z'/%3e%3cpath d='M0 233.376v-30.713h46.069zm96 22.618v-48.912l-73.372 48.912z' fill='%232E52B2'/%3e%3cpath fill='%23D80027' d='M256 255.997v-15.082l-57.377-38.252H176z'/%3e%3cg fill='%232E52B2'%3e%3cpath d='M256 233.376v-30.713h-46.069zm-96 22.618v-48.912l73.372 48.912z'/%3e%3ccircle cx='128' cy='170.66' r='22.627'/%3e%3c/g%3e%3cpath d='M128 154.663l3.97 12.222h12.854l-10.398 7.556 3.971 12.222L128 179.109l-10.398 7.554 3.972-12.222-10.398-7.556h12.853zm0 65.14l2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm0-117.334l2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm69.931 58.667l2.365 7.277h7.653l-6.192 4.499 2.365 7.279-6.191-4.498-6.191 4.498 2.365-7.279-6.191-4.499h7.652zm-139.862 0l2.364 7.277h7.653l-6.191 4.499 2.364 7.279-6.19-4.498-6.191 4.498 2.365-7.279-6.192-4.499h7.653z' fill='%23FFDA44'/%3e%3c/svg%3e",
  NZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.334h512v341.337H0z'/%3e%3cpath d='M425.301 233.745l3.388 10.428h10.963l-8.87 6.444 3.388 10.427-8.869-6.444-8.871 6.444 3.388-10.427-8.87-6.444h10.963zm-39.194 75.072l5.083 15.642h16.445l-13.305 9.667 5.082 15.64-13.305-9.667-13.305 9.667 5.083-15.64-13.305-9.667h16.445zm1.481-122.846l4.236 13.036h13.704l-11.088 8.054 4.235 13.034-11.087-8.056-11.088 8.056 4.235-13.034-11.087-8.054h13.704zm-37.712 47.32l5.082 15.641h16.446l-13.306 9.666 5.084 15.641-13.306-9.666-13.305 9.666 5.082-15.641-13.305-9.666h16.445z' fill='%23D80027'/%3e%3cpath fill='white' d='M256.003 85.329v30.564l-45.178 25.088h45.178v59.359H196.89l59.113 32.846v22.806h-26.69l-73.484-40.826v40.826h-55.652v-48.573l-87.429 48.573H.003v-30.553l45.168-25.099H.003v-59.359h59.103L.003 108.147V85.329h26.68l73.494 40.838V85.329h55.652v48.573l87.43-48.573z'/%3e%3cpath fill='%23D80027' d='M144 85.33h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z'/%3e%3cpath fill='%230052B4' d='M155.826 200.344L256 255.998v-15.739l-71.847-39.915z'/%3e%3cpath fill='white' d='M155.826 200.344L256 255.998v-15.739l-71.847-39.915z'/%3e%3cpath d='M155.826 200.344L256 255.998v-15.739l-71.847-39.915zm-83.98 0L0 240.259v15.739l100.174-55.654z' fill='%23D80027'/%3e%3cpath fill='%230052B4' d='M100.174 140.983L0 85.33v15.738l71.847 39.915z'/%3e%3cpath fill='white' d='M100.174 140.983L0 85.33v15.738l71.847 39.915z'/%3e%3cpath d='M100.174 140.983L0 85.33v15.738l71.847 39.915zm83.98 0L256 101.068V85.33l-100.174 55.653z' fill='%23D80027'/%3e%3c/svg%3e",
  OM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23D80027' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M138 0h377v114H138z'/%3e%3cpath fill='%234A7C3A' d='M138 230h377v114H138z'/%3e%3cg fill='none' stroke='white' stroke-width='10' stroke-miterlimit='2'%3e%3cpath d='M40.3 35.2s37.1 48 50.8 54.5c13.7 6.5 17.1 5.7 17.1 5.7'/%3e%3cpath d='M100 35.2S62.9 80.6 53.3 87.6c-9.6 7-18.7 7.8-18.7 7.8m17.1-30.1h37.9M70.7 35.2v30.1'/%3e%3c/g%3e%3c/svg%3e",
  PA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M256 256v170.663H0V256h256z'/%3e%3cpath fill='%23D80027' d='M512 85.337V256H256V85.337h256z'/%3e%3cpath fill='%230052B4' d='M128 123.034l11.824 36.389h38.263l-30.955 22.491 11.823 36.389L128 195.813l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z'/%3e%3cpath fill='%23D80027' d='M384 293.697l11.824 36.389h38.263l-30.955 22.491 11.823 36.389L384 366.476l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z'/%3e%3c/svg%3e",
  PE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.326H0z'/%3e%3cpath d='M0 85.331h170.663v341.337H0zm341.337 0H512v341.337H341.337z' fill='%23D80027'/%3e%3c/svg%3e",
  PF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z' fill='%23D80027'/%3e%3cpath fill='%23FFDA44' d='M293.991 256c0 20.982-17.01 33.243-37.992 33.243S218.008 276.982 218.008 256s17.01-37.992 37.992-37.992 37.991 17.01 37.991 37.992z'/%3e%3cpath fill='%230052B4' d='M293.991 256c0 20.982-17.01 37.992-37.992 37.992s-37.992-17.01-37.992-37.992'/%3e%3cpath d='M232.259 246.506h9.498v19h-9.498zm37.988 0h9.498v19h-9.498zm-19-14.247h9.498v33.243h-9.498z' fill='%23D80027'/%3e%3c/svg%3e",
  PG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath d='M0 85.333h512V426.67H0z'/%3e%3cpath fill='%23A2001D' d='M0 85.33h512v341.332'/%3e%3cpath d='M204.631 326.488l2.762 8.504h8.941l-7.233 5.255 2.763 8.502-7.233-5.254-7.233 5.254 2.762-8.502-7.233-5.255h8.94zm-22.834-81.622l4.605 14.172h14.901l-12.056 8.757 4.605 14.172-12.055-8.759-12.055 8.759 4.606-14.172-12.056-8.757h14.901zm0 103.883l4.604 14.173h14.902l-12.057 8.757 4.606 14.173-12.055-8.759-12.055 8.759 4.604-14.173-12.054-8.757h14.899zm43.566-66.782l4.606 14.172h14.901l-12.056 8.758 4.605 14.172-12.056-8.759-12.054 8.759 4.606-14.172-12.056-8.758h14.901zm-87.133 0l4.606 14.172h14.899l-12.054 8.758 4.603 14.172-12.054-8.759-12.055 8.759 4.605-14.172-12.055-8.758h14.9z' fill='white'/%3e%3cpath fill='%23FFDA44' d='M376.526 204.163c-7.628-7.628-17.538-12.133-28.189-12.908l31.88-24.795c-12.698-12.698-29.714-18.431-46.319-17.218a44.31 44.31 0 00-11.396-19.511l-12.593 25.186a18.47 18.47 0 00-3.148-4.197c-7.245-7.245-18.991-7.244-26.234 0s-7.245 18.99 0 26.234a18.536 18.536 0 004.197 3.148l-25.186 12.593a44.303 44.303 0 0019.519 11.399c-1.217 16.606 4.511 33.619 17.209 46.317L324.12 214.6a11.053 11.053 0 017.807-3.202c2.973 0 5.768 1.158 7.87 3.26a11.055 11.055 0 013.26 7.87c0 2.974-1.158 5.768-3.26 7.87l10.494 10.494c4.905-4.905 7.607-11.428 7.607-18.364 0-5.675-1.81-11.071-5.153-15.534a29.492 29.492 0 0113.288 7.662c11.573 11.572 11.573 30.403 0 41.975l10.494 10.494c8.409-8.409 13.039-19.59 13.039-31.481-.001-11.892-4.632-23.072-13.04-31.481z'/%3e%3c/svg%3e",
  PH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M512 85.337V256H256L0 85.337z'/%3e%3cpath fill='%23D80027' d='M512 256v170.663H0L256 256z'/%3e%3cpath d='M161.908 256l-27.288-12.835 14.532-26.428-29.632 5.668-3.755-29.933-20.64 22.015-20.639-22.015-3.755 29.933-29.631-5.669 14.531 26.428L28.343 256l27.288 12.835L41.1 295.263l29.633-5.668 3.753 29.933 20.639-22.015 20.64 22.015 3.755-29.933 29.631 5.669-14.532-26.427zM21.789 117.607l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.694-14.809-4.932-9.268 12.559.117-15.608-14.809-4.934 14.88-4.712zm0 235.923l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.695-14.809-4.933-9.268 12.558.117-15.607-14.809-4.934 14.88-4.712zm188.606-117.961l-9.081 12.695-14.879-4.713 9.268 12.559-9.081 12.696 14.809-4.933 9.268 12.558-.117-15.607 14.809-4.934-14.88-4.713z' fill='%23FFDA44'/%3e%3c/svg%3e",
  PK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cg fill='white'%3e%3cpath d='M393.508 170.516l17.512 18.875 23.363-10.821-12.541 22.487 17.513 18.876-25.263-4.978-12.539 22.488-3.073-25.564-25.263-4.978 23.363-10.82z'/%3e%3cpath d='M0 85.343h512v341.326H0z'/%3e%3c/g%3e%3cpath fill='%2301411c' d='M128 85.331h384v341.337H128z'/%3e%3cpath d='M361.909 298.793c-31.037 22.426-74.378 15.446-96.804-15.592-22.427-31.038-15.446-74.379 15.593-96.804 9.677-6.992 20.55-11.125 31.613-12.563-21.283-3.183-43.777 1.613-62.598 15.211-38.2 27.602-46.792 80.944-19.191 119.145 27.601 38.199 80.944 46.792 119.145 19.189 18.82-13.598 30.436-33.448 34.096-54.655-4.839 10.05-12.176 19.076-21.854 26.069zm-1.329-125.904l17.484 18.842 23.322-10.802-12.519 22.447 17.483 18.844-25.219-4.968-12.519 22.45-3.067-25.521-25.22-4.969 23.323-10.802z' fill='white'/%3e%3c/svg%3e",
  PL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cg fill='white'%3e%3cpath d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512V256H0z'/%3e%3c/g%3e%3cpath fill='%23D80027' d='M0 256h512v170.663H0z'/%3e%3c/svg%3e",
  PM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 26.666 640 426.666'%3e%3cg fill-rule='evenodd' stroke-width='1pt'%3e%3cpath fill='white' d='M0 0h640v480H0z'/%3e%3cpath fill='%2300267f' d='M0 0h213.3v480H0z'/%3e%3cpath fill='%23f31830' d='M426.7 0H640v480H426.7z'/%3e%3c/g%3e%3c/svg%3e",
  PR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512V153.6H0zm0 136.526h512v68.263H0zM0 358.4h512v68.263H0z' fill='%23D80027'/%3e%3cpath fill='%230052B4' d='M256 256.006L0 426.668V85.331z'/%3e%3cpath fill='white' d='M83.477 195.132l15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z'/%3e%3c/svg%3e",
  PS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23268024' d='M0 312.888h512v113.775H0z'/%3e%3cpath fill='%23e4312b' d='M256 256.006L0 426.668V85.331z'/%3e%3c/svg%3e",
  PT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M196.641 85.337v341.326H0V85.337z'/%3e%3ccircle fill='%23FFDA44' cx='196.641' cy='256' r='64'/%3e%3cpath fill='%23D80027' d='M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z'/%3e%3cpath fill='white' d='M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z'/%3e%3c/svg%3e",
  PW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23338AF3' d='M0 85.331h512v341.337H0z'/%3e%3ccircle fill='%23FFDA44' cx='218.902' cy='255.994' r='74.207'/%3e%3c/svg%3e",
  PY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%230052B4' d='M0 312.888h512v113.775H0z'/%3e%3cpath fill='%236DA544' d='M289.579 216.738l-12.592 12.592c5.37 5.372 8.693 12.792 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.112-5.316-24.985-13.91-33.579z'/%3e%3cpath fill='%23FFDA44' d='M256 232.51l4.421 13.605h14.304l-11.573 8.408 4.421 13.604L256 259.719l-11.573 8.408 4.421-13.604-11.573-8.408h14.304z'/%3e%3c/svg%3e",
  QA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23751A46' d='M0 0h512v342H0z'/%3e%3cpath fill='white' d='M0 0v342h150.3l37.7-19.6-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19 37.7-18.9-37.7-19 37.7-19-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19L188 57l-37.7-19L188 19.1 150.3 0z'/%3e%3c/svg%3e",
  RE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 26.666 640 426.666'%3e%3cg fill-rule='evenodd' stroke-width='1pt'%3e%3cpath fill='white' d='M0 0h640v480H0z'/%3e%3cpath fill='%2300267f' d='M0 0h213.3v480H0z'/%3e%3cpath fill='%23f31830' d='M426.7 0H640v480H426.7z'/%3e%3c/g%3e%3c/svg%3e",
  RO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.331h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M0 85.331h170.663v341.337H0z'/%3e%3cpath fill='%23D80027' d='M341.337 85.331H512v341.337H341.337z'/%3e%3c/svg%3e",
  RS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%23D80027' d='M0 85.331h512v113.775H0z'/%3e%3cpath fill='white' d='M0 312.882h512v113.775H0z'/%3e%3cpath fill='%23D80027' d='M129.468 181.793v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.356 256 266.929v-85.136H129.468z'/%3e%3cpath d='M155.634 196.634h74.201v-29.681l-14.841 7.42-22.261-22.26-22.259 22.26-14.84-7.42zm85.526 82.148l-48.231-48.231-48.231 48.231 15.741 15.74 32.49-32.49 32.49 32.49z' fill='%23FFDA44'/%3e%3cpath fill='white' d='M241.16 233.734h-22.504a14.74 14.74 0 002.001-7.418c0-8.196-6.645-14.84-14.84-14.84-5.663 0-10.581 3.172-13.083 7.836-2.502-4.663-7.421-7.836-13.083-7.836-8.195 0-14.84 6.644-14.84 14.84 0 2.706.736 5.235 2.001 7.418h-22.114c0 8.196 7.139 14.84 15.334 14.84h-.494c0 8.196 6.644 14.84 14.84 14.84 0 7.257 5.211 13.286 12.094 14.576l-11.694 26.401a48.075 48.075 0 0018.149 3.544 48.079 48.079 0 0018.149-3.544l-11.694-26.401c6.883-1.29 12.094-7.319 12.094-14.576 8.196 0 14.84-6.644 14.84-14.84h-.494c8.199 0 15.338-6.644 15.338-14.84z'/%3e%3c/svg%3e",
  RU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.33v341.332h512V85.33z'/%3e%3cpath fill='%230052B4' d='M0 85.333h512V426.67H0z'/%3e%3cpath fill='white' d='M0 85.333h512v113.775H0z'/%3e%3cpath fill='%23D80027' d='M0 312.884h512v113.775H0z'/%3e%3c/svg%3e",
  RW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23338AF3' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%23FFDA44' d='M0 255.994h512v81.619H0z'/%3e%3cpath fill='%23496E2D' d='M0 337.614h512v89.043H0z'/%3e%3cpath fill='%23FFDA44' d='M278.261 185.209l20.844 9.804-11.099 20.186 22.632-4.33 2.868 22.865 15.765-16.816 15.766 16.816 2.867-22.865 22.633 4.33-11.099-20.186 20.843-9.804-20.844-9.805 11.1-20.185-22.633 4.329-2.868-22.864-15.765 16.816-15.766-16.816-2.867 22.864-22.634-4.329 11.1 20.187z'/%3e%3c/svg%3e",
  SA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23055e1c' d='M0 85.333h512v341.333H0z'/%3e%3cg fill='white'%3e%3cpath d='M183.548 289.386c0 12.295 9.731 22.261 21.736 22.261h65.208c0 10.244 8.11 18.551 18.114 18.551h21.736c10.004 0 18.114-8.306 18.114-18.551v-22.261H183.548zm146.716-107.595v51.942c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942h-21.735zm-155.773 51.943c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942H174.49v51.942z'/%3e%3cpath d='M297.661 181.788h21.736v51.942h-21.736zm-32.604 29.685c0 2.046-1.625 3.71-3.623 3.71-1.998 0-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 2.046-1.625 3.71-3.623 3.71s-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 14.32 11.376 25.971 25.358 25.971 5.385 0 10.38-1.733 14.491-4.677 4.11 2.944 9.106 4.677 14.491 4.677 1.084 0 2.15-.078 3.2-.215-1.54 6.499-7.255 11.345-14.068 11.345v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.943h-21.736l.002 29.682z'/%3e%3cpath d='M207.093 248.57h32.601v22.261h-32.601z'/%3e%3c/g%3e%3c/svg%3e",
  SB: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23496E2D' d='M0 85.334h512v341.337H0z'/%3e%3cpath fill='%230052B4' d='M0 426.663V85.329h512'/%3e%3cpath fill='%23FFDA44' d='M0 396.494v30.169h45.255L512 115.499v-30.17h-45.255z'/%3e%3cpath d='M85.688 108.787l5.12 15.756h16.566l-13.403 9.737 5.12 15.757-13.403-9.738-13.405 9.738 5.12-15.757L64 124.543h16.567zm84.624 0l5.121 15.756H192l-13.403 9.737 5.12 15.757-13.405-9.738-13.403 9.738 5.12-15.757-13.403-9.737h16.566zm-84.624 82.502l5.12 15.756h16.566l-13.403 9.738 5.12 15.757-13.403-9.739-13.405 9.739 5.12-15.757L64 207.045h16.567zm84.624 0l5.121 15.756H192l-13.403 9.738 5.12 15.757-13.405-9.739-13.403 9.739 5.12-15.757-13.403-9.738h16.566zM128 150.037l5.12 15.756h16.568l-13.405 9.738 5.12 15.758L128 181.55l-13.403 9.739 5.12-15.758-13.405-9.738h16.568z' fill='white'/%3e%3c/svg%3e",
  SC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23FFDA44' d='M235.454 85.337L0 426.663 427.345 85.337z'/%3e%3cpath fill='%236DA544' d='M512 329.393L0 426.663h512z'/%3e%3cpath fill='%23D80027' d='M512 85.337h-84.655L0 426.663l512-204.512z'/%3e%3cpath fill='%230052B4' d='M0 85.337v341.326L235.454 85.337z'/%3e%3c/svg%3e",
  SD: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath d='M0 312.888h512v113.775H0z'/%3e%3cpath fill='%23496E2D' d='M0 426.668V85.331l256 170.675z'/%3e%3c/svg%3e",
  SE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.333h512V426.67H0z'/%3e%3cpath fill='%23FFDA44' d='M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z'/%3e%3c/svg%3e",
  SG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512V256H0z'/%3e%3cg fill='white'%3e%3cpath d='M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 00-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zm66.783-48.231l3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z'/%3e%3cpath d='M121.344 144.696l3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zm57.834 0l3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zm-11.131 33.391l3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zm-35.573 0l3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z'/%3e%3c/g%3e%3c/svg%3e",
  SH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%230052B4' d='M0 0h512v341.3H0z'/%3e%3cpath fill='white' d='M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z'/%3e%3cpath d='M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z'/%3e%3c/g%3e%3cpath fill='%232E52B2' d='M256 22.7v30.7h-46.1z'/%3e%3cpath d='M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z' fill='%23D80027'/%3e%3cpath fill='%232E52B2' d='M256 22.7v30.7h-46.1z'/%3e%3cpath d='M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z' fill='%23D80027'/%3e%3cpath fill='%2329DBFF' d='M449 139.7c-.1 44.4-7.2 92.1-65 114.9-57.8-22.8-64.9-70.5-65-114.9h130z'/%3e%3cpath fill='%23ffda44' d='M449 139.7c0-16.7-.9-32.9-.5-47.1C426.9 83 398.4 81 383.9 81s-42.9 2-64.6 11.6c.4 14.2-.5 30.4-.5 47.1H449z'/%3e%3cpath fill='%23BF521B' d='M369.5 204.5l.3 10.3-12.8.2 4.9 13.2h-17.3c-18-20.2-23.4-42.4-24.9-68.1l9.1-9.7 8.3 14.3 10.8-12.8 7 7.8.8 15.7 13.8 29.1z'/%3e%3cpath fill='%23474747' d='M436.6 192.5l-8.6 18.3h-47l-29.2-19.5 25.7 10.5h25.1l3.7-6.5 7.2.2 2-3z'/%3e%3c/svg%3e",
  SI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M0 199.112h512v113.775H0z'/%3e%3cpath fill='%23D80027' d='M0 312.888h512v113.775H0z'/%3e%3cpath fill='white' d='M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z'/%3e%3cpath fill='%230052B4' d='M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z'/%3e%3cpath fill='white' d='M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l14.848 14.837 29.674-22.261 29.685 22.261 14.837-14.837z'/%3e%3c/svg%3e",
  SJ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.334h512v341.337H0z'/%3e%3cpath fill='white' d='M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z'/%3e%3cpath fill='%232E52B2' d='M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z'/%3e%3c/svg%3e",
  SK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M0 196.641h512v118.717H0z'/%3e%3cpath fill='%23D80027' d='M0 315.359h512v111.304H0z'/%3e%3cpath fill='white' d='M129.468 181.799v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.362 256 266.935v-85.136H129.468z'/%3e%3cpath fill='%23D80027' d='M146.126 184.294v81.941c0 5.472 1.215 10.64 3.623 15.485h85.97c2.408-4.844 3.623-10.012 3.623-15.485v-81.941h-93.216z'/%3e%3cpath fill='white' d='M221.301 241.427h-21.425v-14.283h14.284v-14.283h-14.284v-14.284h-14.283v14.284h-14.282v14.283h14.282v14.283h-21.426v14.284h21.426v14.283h14.283v-14.283h21.425z'/%3e%3cpath fill='%230052B4' d='M169.232 301.658c9.204 5.783 18.66 9.143 23.502 10.636 4.842-1.494 14.298-4.852 23.502-10.636 9.282-5.833 15.79-12.506 19.484-19.939a24.878 24.878 0 00-14.418-4.583c-1.956 0-3.856.232-5.682.657-3.871-8.796-12.658-14.94-22.884-14.94-10.227 0-19.013 6.144-22.884 14.94a25.048 25.048 0 00-5.682-.657 24.88 24.88 0 00-14.418 4.583c3.691 7.433 10.198 14.106 19.48 19.939z'/%3e%3c/svg%3e",
  SL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%23338AF3' d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  SM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23338AF3' d='M0 85.34h512v341.326H0z'/%3e%3cpath fill='white' d='M512 85.334v166.69L0 256.175V85.334z'/%3e%3cpath fill='%236DA544' d='M323.744 203.099L256 270.843l-67.744-67.744a81.156 81.156 0 00-13.879 45.483v22.261c0 35.744 23.097 66.193 55.148 77.213-4.277 8.385-3.556 18.848 2.712 26.671l24.258-19.439 24.258 19.439c6.342-7.915 7.011-18.534 2.564-26.968 31.614-11.261 54.308-41.485 54.308-76.916v-22.261a81.174 81.174 0 00-13.881-45.483z'/%3e%3cpath fill='%23FFDA44' d='M256 330.206c-32.732 0-59.362-26.63-59.362-59.362v-22.261c0-32.733 26.63-59.363 59.362-59.363s59.362 26.63 59.362 59.362v22.261c0 32.733-26.63 59.363-59.362 59.363z'/%3e%3cpath fill='%23338AF3' d='M293.101 270.843v-22.261c0-20.458-16.643-37.101-37.101-37.101s-37.101 16.643-37.101 37.101v22.261L256 278.264l37.101-7.421z'/%3e%3cpath fill='%236DA544' d='M218.899 270.843c0 20.458 16.643 37.101 37.101 37.101s37.101-16.643 37.101-37.101h-74.202z'/%3e%3cpath fill='%23FFDA44' d='M300.522 189.22c0-12.295-9.966-22.261-22.261-22.261a22.173 22.173 0 00-14.84 5.672v-13.093h7.421v-14.84h-7.421v-7.421h-14.84v7.421h-7.421v14.84h7.421v13.093a22.177 22.177 0 00-14.841-5.672c-12.295 0-22.261 9.966-22.261 22.261 0 6.591 2.867 12.512 7.421 16.589v13.093h74.203v-13.093c4.552-4.077 7.419-9.997 7.419-16.589z'/%3e%3c/svg%3e",
  SN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.331h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M330.207 85.331H512v341.337H330.207z'/%3e%3cpath d='M0 85.331h181.793v341.337H0zm255.999 111.301l14.733 45.347h47.685l-38.576 28.029 14.734 45.348-38.576-28.026-38.577 28.026 14.737-45.348-38.576-28.029h47.681z' fill='%23496E2D'/%3e%3c/svg%3e",
  SO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23338AF3' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='white' d='M256 157.273l22.663 69.748H352l-59.332 43.106 22.664 69.749L256 296.769l-59.332 43.107 22.664-69.749L160 227.021h73.337z'/%3e%3c/svg%3e",
  SR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%23A2001D' d='M0 196.636h512v118.728H0z'/%3e%3cpath d='M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z' fill='%236DA544'/%3e%3cpath fill='%23FFDA44' d='M256.742 218.003l9.43 29.021h30.518L272 264.963l9.431 29.023-24.689-17.937-24.689 17.937 9.431-29.023-24.69-17.939h30.518z'/%3e%3c/svg%3e",
  SS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23496E2D' d='M0 322.783h512v103.88H0z'/%3e%3cpath d='M0 85.337h512v104.515H0z'/%3e%3cpath fill='%23A2001D' d='M0 210.877h512v89.656H0z'/%3e%3cpath fill='%230052B4' d='M256 256.006L0 426.668V85.331z'/%3e%3cpath fill='%23FFDA44' d='M73.178 209.188l20.831 29.067 34.084-10.83-21.207 28.795 20.83 29.069-33.939-11.271-21.208 28.794.234-35.762-33.94-11.273 34.083-10.83z'/%3e%3c/svg%3e",
  ST: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z' fill='%236DA544'/%3e%3cpath fill='%23D80027' d='M256 256.006L0 426.668V85.331z'/%3e%3cpath d='M302.049 226.318l7.368 22.674h23.842l-19.288 14.016 7.366 22.674-19.288-14.015-19.287 14.015 7.366-22.674-19.288-14.016h23.842zm74.203 0l7.367 22.674h23.842l-19.288 14.016 7.367 22.674-19.288-14.015-19.288 14.015 7.367-22.674-19.288-14.016h23.842z'/%3e%3c/svg%3e",
  SV: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z' fill='%230052B4'/%3e%3cpath fill='%23FFDA44' d='M228.582 261.936L256 214.447l27.418 47.489z'/%3e%3cpath fill='%236DA544' d='M291.616 277.616L256 295.425l-35.616-17.809v-23.744h71.232z'/%3e%3cpath fill='%23FFDA44' d='M289.579 216.485l-12.592 12.592c5.37 5.372 8.693 12.791 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.114-5.316-24.987-13.91-33.579z'/%3e%3c/svg%3e",
  SX: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M512 85.331v166.69L0 256.173V85.331z'/%3e%3cpath fill='white' d='M256 256.006L0 426.668V85.331z'/%3e%3cg fill='%23FFDA44'%3e%3cpath d='M59.621 256a59.546 59.546 0 00-.193 4.57c0 32.821 26.607 59.429 59.429 59.429s59.429-26.607 59.429-59.429c0-1.539-.078-3.061-.193-4.57H59.621z'/%3e%3ccircle cx='118.862' cy='210.287' r='18.286'/%3e%3c/g%3e%3cpath fill='%23D80027' d='M77.715 205.714v59.429c0 31.494 41.144 41.143 41.144 41.143s41.144-9.649 41.144-41.143v-59.429H77.715z'/%3e%3cpath fill='%23338AF3' d='M118.877 287.148c-7.632-2.746-22.876-9.767-22.876-22.006v-41.144h45.715v41.144c-.001 12.28-15.244 19.283-22.839 22.006z'/%3e%3cpath fill='%23F3F3F3' d='M128.001 246.856v-9.142l-9.144-4.571-9.142 4.571v9.142l-4.571 4.573v18.285h27.428v-18.285z'/%3e%3c/svg%3e",
  SY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%23D80027' d='M0 85.331h512v113.775H0z'/%3e%3cpath d='M0 312.882h512v113.775H0z'/%3e%3cpath d='M187.31 215.184l9.208 28.341h29.802l-24.11 17.518 9.209 28.342-24.109-17.516-24.11 17.516 9.209-28.342-24.109-17.518h29.801zm137.38 0l9.209 28.341H363.7l-24.109 17.518 9.209 28.342-24.11-17.516-24.109 17.516 9.209-28.342-24.11-17.518h29.802z' fill='%236DA544'/%3e%3c/svg%3e",
  SZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3e%3cpath fill='%232B5DEA' d='M0 0h900v600H0V0z'/%3e%3cpath fill='%23FFDF29' d='M0 100h900v400H0V100z'/%3e%3cpath fill='%23D70000' d='M0 150h900v300H0V150z'/%3e%3cpath fill='white' d='M450 171.4v257.2c114.3 0 171.4-85.7 214.3-128.6-42.9-42.9-100-128.6-214.3-128.6z'/%3e%3cpath d='M450 171.4c-100 0-171.4 85.7-214.3 128.6C278.6 342.9 350 428.6 450 428.6V171.4z'/%3e%3cpath fill='white' d='M346.3 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z'/%3e%3cpath d='M477.8 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z'/%3e%3c/svg%3e",
  TA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%230052B4' d='M0 0h512v341.3H0z'/%3e%3cpath fill='white' d='M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z'/%3e%3cpath d='M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z'/%3e%3c/g%3e%3cpath fill='%232E52B2' d='M256 22.7v30.7h-46.1z'/%3e%3cpath d='M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z' fill='%23D80027'/%3e%3cpath fill='%232E52B2' d='M256 22.7v30.7h-46.1z'/%3e%3cpath d='M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z' fill='%23D80027'/%3e%3cpath fill='%2329DBFF' d='M448.9 169.5c0 9.6-.3 29.6-1.4 39.2-4.1 34.9-23.5 68.8-62.1 85.9-45.3-17.9-60.8-51-64.9-85.9-1.1-9.6-1.5-19.4-1.5-29l.3-47.1h129.2l.4 36.9z'/%3e%3cpath fill='white' d='M447.5 208.7c-.2 1.6-.4 3.3-.6 4.9-4.8 33.1-22.9 65.4-61.5 81-43.2-17-59.4-47.9-64.2-81-.2-1.6-.4-3.2-.6-4.9'/%3e%3cpath fill='%2329DBFF' d='M385.4 251.7l-22.9-43h45.8z'/%3e%3cpath fill='white' d='M385.4 165.8l-22.9 42.9h45.8z'/%3e%3cellipse fill='%23FFBE57' cx='474.8' cy='236.8' rx='16.8' ry='43.3'/%3e%3cellipse fill='%23FFBE57' cx='295.3' cy='236.8' rx='16.8' ry='43.3'/%3e%3cpath fill='white' d='M385.4 31.5l-33.4 44h68.5zM315.5 280s33.8 29.5 69.9 29.5 67.1-29.5 67.1-29.5l8.5 14.6S439.2 326 385.4 326 307 294.6 307 294.6l8.5-14.6z'/%3e%3cellipse fill='%23A5A5A5' cx='386.3' cy='104.3' rx='34.3' ry='23.3'/%3e%3c/svg%3e",
  TC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.333h512V426.67H0z'/%3e%3cpath fill='%23FFDA44' d='M332.058 191.996v78.221c0 38.103 51.942 49.779 51.942 49.779s51.942-11.675 51.942-49.779v-78.221H332.058z'/%3e%3cpath fill='%23FF9811' d='M376.579 220.44c0 7.855-6.644 28.445-14.84 28.445s-14.84-20.589-14.84-28.445c0-7.856 14.84-14.222 14.84-14.222s14.84 6.367 14.84 14.222z'/%3e%3cpath fill='%23A2001D' d='M415.961 235.93c2.394-5.6 4.257-13.785 4.257-17.86 0-6.546-8.904-11.852-8.904-11.852s-8.904 5.306-8.904 11.852c0 4.075 1.862 12.26 4.257 17.86l-5.141 11.123a26.898 26.898 0 009.788 1.831c3.463 0 6.766-.654 9.788-1.831l-5.141-11.123z'/%3e%3cpath fill='%236DA544' d='M372.87 270.217s-7.421 14.222-7.421 28.445h37.101c0-14.222-7.421-28.445-7.421-28.445l-11.13-7.111-11.129 7.111z'/%3e%3cpath fill='%23D80027' d='M395.13 270.217v-3.555c0-5.891-4.983-10.666-11.13-10.666-6.147 0-11.13 4.776-11.13 10.666v3.555h22.26z'/%3e%3cpath fill='white' d='M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z'/%3e%3cpath fill='%23D80027' d='M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z'/%3e%3cpath fill='%230052B4' d='M155.826 200.344L256 255.996v-15.737l-71.847-39.915z'/%3e%3cpath fill='white' d='M155.826 200.344L256 255.996v-15.737l-71.847-39.915z'/%3e%3cpath d='M155.826 200.344L256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z' fill='%23D80027'/%3e%3cpath fill='%230052B4' d='M100.174 140.982L0 85.33v15.737l71.847 39.915z'/%3e%3cpath fill='white' d='M100.174 140.982L0 85.33v15.737l71.847 39.915z'/%3e%3cpath d='M100.174 140.982L0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z' fill='%23D80027'/%3e%3c/svg%3e",
  TD: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%230052B4' d='M0 85.331h170.663v341.337H0z'/%3e%3cpath fill='%23D80027' d='M341.337 85.331H512v341.337H341.337z'/%3e%3c/svg%3e",
  TG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M0 85.337h512V153.6H0zM0 358.4h512v68.263H0zm0-136.537h512v68.263H0z' fill='%23496E2D'/%3e%3cpath fill='%23D80027' d='M0 85.337h204.054v204.054H0z'/%3e%3cpath fill='white' d='M102.026 133.938l13.26 40.812h42.916l-34.718 25.226 13.26 40.814-34.718-25.224-34.719 25.224 13.263-40.814-34.718-25.226h42.913z'/%3e%3c/svg%3e",
  TH: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.334h512V426.66H0z'/%3e%3cpath fill='%230052B4' d='M0 194.056h512v123.882H0z'/%3e%3cpath d='M0 85.334h512v54.522H0zm0 286.809h512v54.522H0z' fill='%23D80027'/%3e%3c/svg%3e",
  TJ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath fill='%236DA544' d='M0 312.888h512v113.775H0z'/%3e%3cpath d='M226.318 300.522h59.364v-25.23l-11.873 5.937L256 263.421l-17.809 17.808-11.873-5.937zm-33.963-29.682l2.763 8.504h8.94l-7.233 5.255 2.763 8.502-7.233-5.255-7.234 5.255 2.763-8.502-7.233-5.255h8.94zm8.566-29.68l2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm24.488-22.261l2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm94.236 51.941l-2.763 8.504h-8.94l7.233 5.255-2.763 8.502 7.233-5.255 7.234 5.255-2.763-8.502 7.233-5.255h-8.94zm-8.566-29.68l-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zm-24.488-22.261l-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zM256 207.767l2.763 8.503h8.941l-7.234 5.256 2.763 8.502-7.233-5.254-7.233 5.254 2.763-8.502-7.234-5.256h8.941z' fill='%23FFDA44'/%3e%3c/svg%3e",
  TK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M210.715 174.377l3.684 11.338h11.919l-9.643 7.006 3.684 11.337-9.644-7.007-9.644 7.007 3.684-11.337-9.645-7.006h11.921zm-93.899 107.594l4.605 14.172h14.9l-12.055 8.757 4.606 14.173-12.056-8.76-12.055 8.76 4.604-14.173-12.054-8.757h14.899zm27.88-162.292l4.604 14.172h14.901l-12.056 8.758 4.606 14.171-12.055-8.759-12.056 8.759 4.606-14.171-12.055-8.758h14.9zm-75.157 55.652l4.604 14.172h14.9l-12.055 8.758 4.606 14.171-12.055-8.758-12.056 8.758 4.606-14.171-12.055-8.758h14.9z' fill='white'/%3e%3cpath d='M483.386 354.503H117.801s109.234-88.562 310.593-220.938c.001 0-88.443 128.935 54.992 220.938zm-365.585 11.586c-11.177 0-11.195 17.37 0 17.37h365.585c11.177 0 11.195-17.37 0-17.37H117.801z' fill='%23FFDA44'/%3e%3c/svg%3e",
  TL: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23FFDA44' d='M256 256L0 90.691v44.242L155.826 256 0 377.067v44.242z'/%3e%3cpath d='M0 90.691v330.618L189.217 256z'/%3e%3cpath fill='white' d='M44.184 213.36l24.912 23.577 30.121-16.41-14.723 30.98 24.911 23.575-34.012-4.43L60.67 301.63l-6.296-33.716-34.012-4.43 30.119-16.408z'/%3e%3c/svg%3e",
  TM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23496E2D' d='M0 85.337h512v341.326H0z'/%3e%3cg fill='white'%3e%3cpath d='M357.208 183.679c8.397-23.404-1.036-48.858-21.281-61.536a52.131 52.131 0 0110.884 2.621c27.002 9.688 41.038 39.428 31.35 66.431s-39.428 41.038-66.431 31.35a52.182 52.182 0 01-10.069-4.895c23.686 3.084 47.15-10.566 55.547-33.971zm-46.571-67.95l-7.297 9.427-11.22-4.026 6.712 9.852-7.296 9.427 11.443-3.338 6.712 9.852.361-11.914 11.444-3.339-11.221-4.025z'/%3e%3cpath d='M330.338 146.448l-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.443-3.339 6.712 9.853.36-11.915 11.445-3.34-11.221-4.024zM275.9 126.916l-7.296 9.427-11.219-4.024 6.711 9.851-7.296 9.426 11.443-3.338 6.712 9.852.361-11.915 11.444-3.337-11.221-4.027zm-.799 35.189l-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.444-3.338 6.711 9.852.362-11.915 11.443-3.338-11.22-4.026zm33.484 12.013l-7.296 9.427-11.22-4.026 6.712 9.853-7.297 9.426 11.444-3.338 6.712 9.852.36-11.915 11.443-3.338-11.219-4.025z'/%3e%3c/g%3e%3cpath fill='%23D80027' d='M83.478 85.337h89.043v341.326H83.478z'/%3e%3cpath fill='white' d='M117.458 175.191l-14.908-11.105v-15.705l14.908-11.105h21.084l14.908 11.105v15.705l-14.908 11.105z'/%3e%3cpath d='M128 137.276h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.105v-8.012H128z' fill='%23FF9811'/%3e%3cpath fill='white' d='M117.458 374.725l-14.908-11.106v-15.704l14.908-11.105h21.084l14.908 11.105v15.704l-14.908 11.106z'/%3e%3cpath d='M128 336.81h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.106v-8.011H128z' fill='%23FF9811'/%3e%3cpath d='M117.458 274.957l-14.908-11.105v-15.703l14.908-11.106h21.084l14.908 11.106v15.703l-14.908 11.105zm36.513 24.434h-6.493v-6.493h-11.411l-8.068-8.068-8.067 8.068h-11.41v6.493h-6.493v12.986h6.493v6.492h11.41l8.068 8.069 8.068-8.069h11.41v-6.492h6.493zm0-99.768h-6.493v-6.492h-11.411l-8.068-8.069-8.067 8.069h-11.41v6.492h-6.493v12.986h6.493v6.492h11.41l8.068 8.07 8.068-8.07h11.41v-6.492h6.493z' fill='%23496E2D'/%3e%3cg fill='%23D80027'%3e%3cpath d='M120.576 248.576h14.84v14.84h-14.84z'/%3e%3ccircle cx='128' cy='206.113' r='7.421'/%3e%3ccircle cx='128' cy='305.887' r='7.421'/%3e%3c/g%3e%3c/svg%3e",
  TN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.331h512v341.337H0z'/%3e%3ccircle fill='white' cx='256' cy='255.994' r='96'/%3e%3cg fill='%23D80027'%3e%3cpath d='M267.826 219.291l16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z'/%3e%3cpath d='M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z'/%3e%3c/g%3e%3c/svg%3e",
  TO: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='white' d='M0 85.331h256v170.663H0z'/%3e%3cpath fill='%23D80027' d='M141.357 157.303V130.59h-26.714v26.713H87.93v26.713h26.713v26.713h26.714v-26.713h26.713v-26.713z'/%3e%3c/svg%3e",
  TR: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='%23E30A17' d='M0 0h513v342H0z'/%3e%3cpath fill='white' d='M259.7 118.6c-13.1-9.5-29-14.6-45.3-14.5-40.8 0-73.8 30.8-73.8 68.9s33.1 68.9 73.8 68.9c17.1 0 32.9-5.4 45.3-14.5-30 38.6-85.7 45.6-124.3 15.5s-45.6-85.7-15.5-124.3 85.7-45.6 124.3-15.5c5.8 4.5 11 9.8 15.5 15.5zm39.9 65.8l-18.1 21.9 1.2-28.4-26.4-10.4 27.3-7.6 1.8-28.3 15.6 23.7 27.5-7.1-17.5 22 15.3 23.9-26.7-9.7z'/%3e%3c/svg%3e",
  TT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='white' d='M6.066 85.337l207.961 212.636 131.584 128.69h160.323L297.973 214.027 166.389 85.337z'/%3e%3cpath d='M43.364 85.337L384.69 426.663h83.946L127.31 85.337z'/%3e%3c/svg%3e",
  TV: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3e%3cpath fill='%230052B4' d='M0 0h900v600H0z'/%3e%3cpath fill='%2300B2EE' d='M0 300h450V0h450v600H0V300z'/%3e%3cpath fill='%23FFDA44' d='M345.3 480.9l29.4 90.6-77.1-56H393l-77.1 56 29.4-90.6zM706.4 340l29.4 90.6-77.1-56H754l-77.1 56 29.5-90.6zm106.4-78.5l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm0-224.1l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6z'/%3e%3cpath fill='white' d='M449.9 0v206.3h-81l81 54V300h-39.7l-129-85.9V300H168.7v-85.9L39.7 300H0v-39.7l81-54H0V93.8h81L0 39.9V0h39.7l129 85.9V0h112.5v85.9L410.2 0z'/%3e%3cpath fill='%23D80027' d='M253.1 0h-56.3v122H0v56.2h196.8V300h56.3V178.2h196.8V122H253.1z'/%3e%3cpath fill='%232E52B2' d='M449.9 39.9v53.9h-81z'/%3e%3cpath fill='%23D80027' d='M0 300v-19.3l109.9-74.4h39.7L12.8 300zM12.8.1l136.8 93.7h-39.7L0 19.4V.1zm437.1.1v19.3L340 93.8h-39.7L437.1.2zM437.1 300l-136.8-93.7H340l109.9 74.4V300z'/%3e%3cpath fill='%23FFDA44' d='M719.9 131.6l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM584 187.7l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm30 242.9l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM488 332l29.4 90.6-77.1-56h95.3l-77.1 56L488 332zm0 132l29.4 90.6-77.1-56h95.3l-77.1 56L488 464z'/%3e%3c/svg%3e",
  TW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%230052B4' d='M0 85.337h256V256H0z'/%3e%3cpath fill='white' d='M186.435 170.669L162.558 181.9l12.714 23.125-25.927-4.961-3.286 26.192L128 206.993l-18.06 19.263-3.285-26.192-25.927 4.96 12.714-23.125-23.877-11.23 23.877-11.231-12.714-23.125 25.927 4.96 3.286-26.192L128 134.344l18.06-19.263 3.285 26.192 25.928-4.96-12.715 23.125z'/%3e%3ccircle fill='%230052B4' cx='128' cy='170.674' r='29.006'/%3e%3cpath fill='white' d='M128 190.06c-10.692 0-19.391-8.7-19.391-19.391 0-10.692 8.7-19.391 19.391-19.391 10.692 0 19.391 8.7 19.391 19.391 0 10.691-8.699 19.391-19.391 19.391z'/%3e%3c/svg%3e",
  TZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23338AF3' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M0 426.663V85.337h512'/%3e%3cpath fill='%23FFDA44' d='M512 152.222V85.337H411.67L0 359.778v66.885h100.33z'/%3e%3cpath d='M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z'/%3e%3c/svg%3e",
  UA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23338AF3' d='M0 85.337h512V256H0z'/%3e%3c/svg%3e",
  UG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='%23232323' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%23FFDA44' d='M0 56.9h512v56.9H0z'/%3e%3cpath fill='%23D32300' d='M0 113.8h512v56.9H0z'/%3e%3cpath fill='%23FFDA44' d='M0 227.6h512v56.9H0z'/%3e%3cpath fill='%23D32300' d='M0 284.4h512v56.9H0z'/%3e%3ccircle fill='white' cx='256' cy='170.7' r='80.7'/%3e%3cpath d='M234.5 127.5c.9-1.4-19.6-2-19.6-2 1.7-2.5 18.4-10.5 18.4-10.5s-.9-6 2.7-9.8l-4.5-9.8s7-3.4 18.4-3.4 19.9 7 21 13.1l-6.4 3.4c-.1 4.7 1.7 11.6-4.3 17.3-5.9 5.7-8.3 6.9-8.5 18.8 0 3.9 2.3 8.2 8.8 11.7 17.4 9.3 38.6 28.2 44.6 33.9 6.1 5.7 5.1 19.2 2.6 25.2s-12.1 14.3-14.3 13.6c-2.2-.6 1.2-9.2-3.5-11.6 0 0-8.9-7.6-16.8.6s-.2 25.2 3.9 28c4.1 2.8 1.7 5-1.9 5H247c-3.8 0-5.4-2.3-1.9-5 7.6-3.8 12.4-15.3 7.4-20.3-4.9-4.9-18.3 1.5-21.5 6.3-2.8 2.8-8.8 3.6-12.9-1.4s-4.1-10.4-1.1-12.5c7-4.8 0 0 .1-.1 0 0 11.9-8.6 29.9-9 3.9 0 4.8-2.2 2.2-4.8 0 0-30.9-27.4-28.1-44.2 3-18.3 20-26.3 13.4-32.5-1.3-1.8 0 0 0 0z'/%3e%3c/svg%3e",
  US: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z' fill='%23D80027'/%3e%3cpath fill='%232E52B2' d='M0 0h256.5v184.1H0z'/%3e%3cpath d='M47.8 138.9l-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0l-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0l-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0l-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0l-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0l-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0l-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6l-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0l-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0l-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0l-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z' fill='white'/%3e%3c/svg%3e",
  UY: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cpath d='M0 38h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z' fill='%230038a8'/%3e%3cpath fill='white' d='M0 0h256.5v190H0z'/%3e%3cpath fill='%23FED443' d='M128.3 138.7l-15.1 22.6-3.8-26.9L86 148.2l8.2-25.9-27.2 2.2 18.6-19.8L60.3 95l25.4-9.7L67 65.5l27.1 2.3-8.2-25.9 23.4 13.8 3.9-26.9 15.1 22.6 15.1-22.6 3.8 26.9 23.4-13.8-8.2 25.9 27.1-2.2-18.6 19.8 25.4 9.7-25.4 9.7 18.6 19.8-27.1-2.2 8.2 25.9-23.4-13.8-3.9 26.9-15-22.7zm0-.5c23.9.9 44-17.6 44.9-41.5.9-23.9-17.6-44-41.5-44.9h-3.4c-23.9.8-42.6 20.8-41.8 44.6.6 22.8 19 41.1 41.8 41.8zm0-10.6c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.3 34-34 34z'/%3e%3c/svg%3e",
  UZ: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M0 322.783h512v103.88H0z'/%3e%3cpath fill='%23338AF3' d='M0 85.337h512v104.515H0z'/%3e%3cpath fill='white' d='M0 210.877h512v89.656H0z'/%3e%3cpath fill='%23338AF3' d='M0 85.337h512v104.515H0z'/%3e%3cpath d='M188.688 137.589c0-15.984 11.234-29.339 26.236-32.614a33.531 33.531 0 00-7.155-.777c-18.442 0-33.391 14.949-33.391 33.391s14.949 33.391 33.391 33.391c2.458 0 4.85-.273 7.155-.777-15.002-3.275-26.236-16.63-26.236-32.614zm45.97 15.177l2.261 6.957h7.315l-5.918 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.261-6.956-5.918-4.301h7.315zm23.348 0l2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm23.347 0l2.26 6.957h7.315l-5.917 4.301 2.26 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.918-4.301h7.315zm23.347 0l2.262 6.957h7.315l-5.919 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.262-6.956-5.919-4.301h7.314zm23.348 0l2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm-70.042-24.284l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm23.347 0l2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.918-4.3h7.315zm23.347 0l2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.299-5.918 4.299 2.262-6.957-5.919-4.3h7.314zm23.348 0l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm-46.695-24.284l2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.918-4.3h7.315zm23.347 0l2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.3-5.918 4.3 2.262-6.957-5.919-4.3h7.314zm23.348 0l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.917-4.3h7.314z' fill='white'/%3e%3c/svg%3e",
  VA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.331h512v341.326H0z'/%3e%3cpath fill='white' d='M256 85.331h256v341.337H256z'/%3e%3cpath fill='%23ACABB1' d='M321.353 233.837l32.073 42.43c-5.053 7.651-5.026 17.961.817 25.692 7.414 9.807 21.374 11.748 31.182 4.335 9.807-7.414 11.748-21.374 4.334-31.182-5.843-7.731-15.756-10.568-24.495-7.795l-49.988-66.129-11.838 8.949-17.759 13.424 17.899 23.677 17.775-13.401zm46.175 48.78a7.421 7.421 0 118.95 11.84 7.421 7.421 0 01-8.95-11.84z'/%3e%3cpath fill='%23FFDA44' d='M376.367 247.24l17.899-23.677-17.759-13.424-11.838-8.949-49.988 66.129c-8.74-2.775-18.651.063-24.495 7.795-7.414 9.808-5.473 23.768 4.334 31.182 9.808 7.414 23.768 5.473 31.182-4.335 5.845-7.731 5.871-18.041.817-25.692l32.073-42.43 17.775 13.401zm-62.504 45.771a7.42 7.42 0 11-11.84-8.95 7.42 7.42 0 0111.84 8.95z'/%3e%3c/svg%3e",
  VC: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23FFDA44' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%23338AF3' d='M0 85.331h170.663v341.337H0z'/%3e%3cpath d='M341.337 85.331H512v341.337H341.337zM214.261 283.82l-33.393-50.086 33.392-50.087 33.392 50.087zm83.478 0l-33.391-50.086 33.391-50.087 33.393 50.087zM256 350.603l-33.391-50.087L256 250.429l33.391 50.087z' fill='%236DA544'/%3e%3c/svg%3e",
  VE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.5 15'%3e%3cpath fill='%23FFCE00' d='M0 0h22.5v5H0z'/%3e%3cpath fill='%23203899' d='M0 5h22.5v5H0z'/%3e%3cpath fill='%23D82B2B' d='M0 10h22.5v5H0z'/%3e%3cpath fill='white' d='M12.13 5.38l.14.46.45.14-.39.27.01.48-.38-.29-.45.15.15-.44-.28-.38h.47zm-1.77 0l.27.39h.47l-.28.38.15.45-.45-.16-.38.28.01-.47-.39-.28.45-.13zm3.44.56l-.01.48.39.27-.46.14-.14.45-.27-.38h-.48l.29-.38-.15-.45.45.16zm-5.11.02l.4.27.44-.18-.13.46.3.36-.47.02-.26.4-.16-.44-.46-.12.37-.3zm6.55 1.17l-.2.44.25.4-.47-.05-.31.36-.1-.46-.43-.18.41-.24.03-.47.35.31zm.19 1.12l.21.43.47.07-.34.33.08.46-.42-.22-.42.22.08-.46-.34-.33.47-.07zM7 8.2l.21.43.47.06-.34.33.08.47L7 9.27l-.42.22.08-.47-.34-.33.47-.06zm.31-1.15l.45.14.38-.29v.48l.39.26-.45.15-.13.46-.28-.38-.47.01.27-.38z'/%3e%3c/svg%3e",
  VG: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%230052B4' d='M0 85.334h512v341.337H0z'/%3e%3cpath fill='white' d='M256 85.334V202.66h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z'/%3e%3cg fill='%23D80027'%3e%3cpath d='M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z'/%3e%3cpath d='M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z'/%3e%3c/g%3e%3cpath fill='%232E52B2' d='M256 107.951v30.712h-46.069z'/%3e%3cpath d='M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z' fill='%23D80027'/%3e%3cpath fill='%232E52B2' d='M256 107.951v30.712h-46.069z'/%3e%3cpath d='M0 255.997v-15.082l57.377-38.252H80zm256 0v-15.082l-57.377-38.252H176z' fill='%23D80027'/%3e%3cpath fill='%23FFDA44' d='M384 259.706l-46.129 46.129c8.645 16.675 26.051 28.074 46.129 28.074s37.484-11.4 46.129-28.074L384 259.706z'/%3e%3cpath fill='%236DA544' d='M332.058 178.084v81.624c.001 39.759 51.942 51.941 51.942 51.941s51.941-12.182 51.942-51.942v-81.623H332.058z'/%3e%3cpath fill='white' d='M372.87 215.181h22.261v59.359H372.87z'/%3e%3ccircle fill='%23A2001D' cx='384' cy='215.181' r='11.13'/%3e%3cpath d='M346.902 192.92h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84zm59.359-66.783h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84z' fill='%23FFDA44'/%3e%3c/svg%3e",
  VI: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.3'%3e%3cpath fill='white' d='M0 0h512v341.3H0z'/%3e%3cpath fill='%231583C4' d='M397.7 166.3l-51 97.7c-1.1 2-.3 4.5 1.8 5.6 2 1.1 4.5.3 5.6-1.8l51-97.7c1-2.1.1-4.6-2-5.5-2-.9-4.3-.2-5.4 1.7z'/%3e%3cpath fill='%231583C4' d='M404.9 188l-57.8 75.4c-1.3 1.9-.8 4.5 1.1 5.8 1.7 1.2 4.1.9 5.5-.7l57.8-75.4c1.4-1.8 1.1-4.4-.8-5.8-1.8-1.5-4.4-1.1-5.8.7z'/%3e%3cpath fill='%231583C4' d='M379 181.3l-32.5 83.1c-.8 2.1.2 4.6 2.4 5.4 2.1.8 4.6-.2 5.4-2.4l32.5-83.1c.7-2.2-.4-4.5-2.6-5.3-2.1-.6-4.3.4-5.2 2.3z'/%3e%3cpath fill='%23409347' d='M122.1 171.9c.4 1.7 1.2 4.7 2.2 8.5 1.7 6.4 3.6 12.8 5.6 18.7 2.3 6.9 14.7 31.4 20.2 39.1 6.9 9.7 14.1 19.3 21.5 28.6 1.6 1.9 4.5 2.1 6.4.5 1.8-1.6 2.1-4.3.7-6.2-7.3-9.2-14.4-18.6-21.2-28.2-4.2-5.8-17.2-31.1-19-36.7-2.9-8.7-5.4-17.6-7.6-26.5-.5-2.4-2.9-4-5.3-3.5s-4 2.9-3.5 5.3c-.1.2 0 .3 0 .4z'/%3e%3cg fill='%23FFD836' stroke='%23231F20' stroke-miterlimit='10'%3e%3cpath d='M297.1 114.9S279.5 42.8 261 42.8c-6.9 0-11.9-.6-15.4 6.4-.9 1.7-20.7-1.6-19.1 20.8.5 6.9 1.1-9.8 14.9-3.4 6.3 3-16.4 48.2-16.4 48.2h72.1z'/%3e%3cpath d='M466.1 48.4l-90.9 22c-75.3 18.3-42.1 44.4-42.1 44.4l-72.1 12-72.1-12s33.2-26.1-42.1-44.4l-90.9-22C43.1 45.3 38.1 51.8 45.3 63c0 0 106.6 104 126.8 112 20.2 8.1 40.8 0 40.8 0s-14.9 8.7-24 24c-9.2 15.3-4.6 34.7-38.9 40.2-5.5 6.6-5 14 2.9 19.9 7.9 5.8 72.1-48.1 72.1-48.1s-24 24.4-24 36.1c0 5.1 44.1 53.8 60.1 53.8s60.1-48.7 60.1-53.8c0-11.7-24-36.1-24-36.1s64.2 53.9 72.1 48.1 11.4-19.3 2.8-19.9c-28-1.8-29.7-24.9-38.9-40.2-9.2-15.3-24-24-24-24s20.6 8.1 40.8 0S476.7 63 476.7 63c7.2-11.2 2.3-17.7-10.6-14.6z'/%3e%3c/g%3e%3cpath fill='white' stroke='%23231F20' stroke-miterlimit='10' d='M201.3 111.8v80.3c0 45.7 59.7 59.7 59.7 59.7s59.7-14 59.7-59.7v-80.3H201.3z'/%3e%3cpath d='M225.2 137.7V235c8.2 6 17 10.2 23.9 12.9V137.7h-23.9zm71.6 0V235c-8.2 6-17 10.2-23.9 12.9V137.7h23.9z' fill='%23D80027'/%3e%3cpath fill='%230052B4' d='M201.3 111.8h119.4v37.9H201.3z'/%3e%3cpath fill='%231583C4' d='M60.1 210.5l-21.9-58.1H15.7l31.8 80.8h25.2l31.5-80.8H81.7zm391.4-58.6h18.9v81.7h-18.9z'/%3e%3c/svg%3e",
  VN: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M196.641 85.337H0v341.326h512V85.337z'/%3e%3cpath fill='%23FFDA44' d='M256 157.279l22.663 69.747H352l-59.332 43.106 22.664 69.749L256 296.774l-59.332 43.107 22.664-69.749L160 227.026h73.337z'/%3e%3c/svg%3e",
  VU: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%236DA544' d='M512 256v170.663H0L215.185 256z'/%3e%3cpath fill='%23D80027' d='M512 85.337V256H215.185L0 85.337z'/%3e%3cpath d='M221.001 239.304L26.868 85.337H8.956l208.168 165.098H512v-11.131zM8.956 426.663h17.912l194.133-153.967H512v-11.131H217.124zM0 92.44v14.206L188.317 256 0 405.354v14.205L206.229 256z'/%3e%3cg fill='%23FFDA44'%3e%3cpath d='M8.956 85.337H0v7.103L206.229 256 0 419.559v7.104h8.956l208.168-165.098H512v-11.13H217.124z'/%3e%3cpath d='M63.718 292.382v-14.295c14.265 0 25.87-11.606 25.87-25.869 0-10.092-8.211-18.303-18.304-18.303-6.875 0-12.469 5.593-12.469 12.469 0 4.397 3.577 7.974 7.974 7.974a4.514 4.514 0 004.508-4.508h14.295c0 10.368-8.435 18.804-18.802 18.804-12.279-.002-22.269-9.993-22.269-22.271 0-14.758 12.006-26.764 26.764-26.764 17.975 0 32.599 14.623 32.599 32.599 0 22.145-18.018 40.164-40.166 40.164z'/%3e%3c/g%3e%3c/svg%3e",
  WF: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 100'%3e%3cpath fill='%23ED2939' d='M0 0h150v100H0z'/%3e%3cpath fill='%23002395' d='M0 0h20v44.33H0z'/%3e%3cpath fill='white' d='M20 0h20v44.33H20z'/%3e%3cpath fill='none' stroke='white' stroke-width='3' d='M0 44.33h62.75V0'/%3e%3cpath fill='white' d='M108.08 43.29L87.96 23.17h40.25l-20.13 20.12zm-6.7 6.71L81.25 29.88v40.25L101.38 50zm6.7 6.71L87.96 76.83h40.25l-20.13-20.12zm6.71-6.71l20.13-20.13v40.25L114.79 50z'/%3e%3c/svg%3e",
  WS: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%230052B4' d='M0 85.331h256v170.663H0z'/%3e%3cpath d='M165.483 181.79l2.764 8.504h8.939l-7.232 5.254 2.763 8.503-7.234-5.255-7.233 5.255 2.763-8.503-7.233-5.254h8.94zm-44.904-66.783l4.606 14.173h14.9l-12.055 8.757 4.605 14.171-12.056-8.758-12.054 8.758 4.605-14.171-12.056-8.757h14.901zm44.522 14.841l4.606 14.172h14.9l-12.055 8.757 4.604 14.173-12.055-8.76-12.054 8.76 4.604-14.173-12.055-8.757h14.9zm-35.192 59.363l4.606 14.172h14.9l-12.055 8.758 4.604 14.171-12.055-8.759-12.054 8.759 4.604-14.171-12.055-8.758h14.9zm-39.01-37.103l4.605 14.173h14.9l-12.055 8.757 4.604 14.173-12.054-8.76-12.055 8.76 4.604-14.173-12.055-8.757h14.9z' fill='white'/%3e%3c/svg%3e",
  XK: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 341.33'%3e%3cpath fill='%230052B4' d='M0 0h512v341.34H0z'/%3e%3cpath d='M220.72 42.63l7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.36-15.9 8.36 3.03-17.7-12.86-12.54 17.78-2.58zm70.56-.06l7.95 16.1 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59zm62.08 11.36l7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.87-12.54 17.78-2.58zm63.01 18.3l7.95 16.11 17.77 2.59-12.86 12.53 3.04 17.71-15.9-8.36-15.9 8.36 3.03-17.71-12.86-12.53 17.78-2.59zm-257.73-18.3l7.95 16.11 17.78 2.58-12.87 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.86-12.54 17.77-2.58zm-63.01 18.3l7.95 16.11 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59z' fill='white'/%3e%3cpath fill='%23FFDA44' d='M217.53 259.33l-27.22-13.61-27.22-54.43h27.22l27.22-27.22 13.61-27.22 27.22-13.61 13.61 13.61 27.22 13.61v13.61l13.61 13.61 40.83 27.22L340 245.73l-40.83 40.83-13.61-27.22-40.83 27.22v27.22l-13.61-13.61-13.59-40.84z'/%3e%3c/svg%3e",
  YE: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath fill='%23D80027' d='M0 85.337h512v113.775H0z'/%3e%3cpath d='M0 312.888h512v113.775H0z'/%3e%3c/svg%3e",
  YT: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 60'%3e%3cpath fill='white' d='M0 0h90v60H0z'/%3e%3cpath stroke='%237f7f7f' stroke-width='.25' fill='%23ABABAB' d='M75.6 39.6c-1.1.7 0 1.8-.6 1.9-.6.1-1.5-1.4-.2-2.5 1.6-1.5 5.8 0 5.9 4.3 0 2.2-.9 6.8-7.2 6.8-7.6 0-11.4-5.7-11.4-11.4 0-4.8 3.7-13.5 6.5-14.6 3.1-1.2 6.7-3.5 6.8-5 0-.5-1.4-.1-3.3.9-3.1 1.7-6.6 2.5-6.6 1.4s2.9-3.1 4-4.6c1.2-1.6.9-5.5 3-5.5 7.6 0 9.9 7.7 7 11.7-1.9 2.6 4.3 1 4.3 1s0 5.3-3.2 7.3c-3 1.8-4.8 3.9-4.8 3.9s.2-4.6-.5-3.9c-.6.7-11.1 4.5-10.3 12 .3 3 4.5 5.4 8.5 5.2s5.7-2.4 5.8-4.9c.1-3.9-3-4.4-3.7-4zm-64.9 4c.1 2.5 1.8 4.7 5.8 4.9s8.2-2.2 8.5-5.2c.8-7.5-9.7-11.3-10.3-12-.7-.7-.5 3.9-.5 3.9s-1.8-2.1-4.8-3.9c-3.2-2-3.2-7.3-3.2-7.3s6.2 1.6 4.3-1c-2.9-4-.6-11.7 7-11.7 2.1 0 1.8 3.9 3 5.5 1.1 1.5 4 3.5 4 4.6s-3.5.3-6.6-1.4c-1.9-1-3.3-1.4-3.3-.9.1 1.5 3.7 3.8 6.8 5 2.8 1.1 6.5 9.8 6.5 14.6 0 5.7-3.8 11.4-11.4 11.4-6.3 0-7.2-4.6-7.2-6.8.1-4.3 4.3-5.8 5.9-4.3 1.2 1.1.4 2.7-.2 2.5-.6-.1.6-1.2-.6-1.9-.6-.4-3.7.1-3.7 4z'/%3e%3cpath fill='%23DE393A' d='M31 28.8v14c0 1.9 2.1 1.6 2.1 1.6h9.3c1.2 0 2.6 2.3 2.6 2.3s1.4-2.3 2.5-2.3h9.6s2 .2 2-1.8V28.7H31z'/%3e%3cpath fill='%233951A3' d='M31 13.1h28v15.7H31z'/%3e%3cpath fill='white' d='M50.1 16.5c-.4 2.4-2.5 4.2-5.1 4.2-2.5 0-4.6-1.8-5.1-4.2-.5.9-.8 1.9-.8 3 0 3.3 2.6 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9 0-1.1-.3-2.1-.8-3z'/%3e%3ccircle fill='%23FEE05F' cx='39.1' cy='36.5' r='3'/%3e%3ccircle fill='%23FEE05F' cx='50.9' cy='36.5' r='3'/%3e%3c/svg%3e",
  ZA: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.337h512v341.326H0z'/%3e%3cpath d='M114.024 256.001L0 141.926v228.17z'/%3e%3cpath fill='%23ffb915' d='M161.192 256L0 94.7v47.226l114.024 114.075L0 370.096v47.138z'/%3e%3cpath fill='%23007847' d='M509.833 289.391c.058-.44.804-.878 2.167-1.318v-65.464H222.602L85.33 85.337H0V94.7L161.192 256 0 417.234v9.429h85.33l137.272-137.272h287.231z'/%3e%3cpath fill='%23000c8a' d='M503.181 322.783H236.433l-103.881 103.88H512v-103.88z'/%3e%3cpath fill='%23e1392d' d='M503.181 189.217H512V85.337H132.552l103.881 103.88z'/%3e%3c/svg%3e",
  ZM: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23496E2D' d='M0 85.331h512v341.337H0z'/%3e%3cpath fill='%23FF9811' d='M490.668 195.476h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16h-.533c0 8.836 7.162 16 16 16 0 8.836 7.162 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.837 0 16.533-7.164 16.533-16z'/%3e%3cpath fill='%23D80027' d='M341.337 255.994h56.888v170.663h-56.888z'/%3e%3cpath fill='%23FF9811' d='M455.112 255.994H512v170.663h-56.888z'/%3e%3cpath d='M398.225 255.994h56.888v170.663h-56.888z'/%3e%3c/svg%3e",
  ZW: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath d='M0 85.333h512V426.67H0z'/%3e%3cpath d='M0 134.196h512v48.868H0zm0 195.472h512v48.868H0z' fill='%23FFDA44'/%3e%3cpath fill='%23057f44' d='M0 85.333h512v48.868H0z'/%3e%3cpath d='M0 183.069h512v48.868H0zm0 97.737h512v48.868H0z' fill='%23D80027'/%3e%3cpath fill='%23057f44' d='M0 378.542h512v48.128H0z'/%3e%3cpath fill='white' d='M276.992 255.996L106.329 426.659H0V85.333h106.329z'/%3e%3cpath d='M256 255.996L85.334 426.662h20.987l170.667-170.666L106.321 85.33H85.334z'/%3e%3cpath fill='%23D80027' d='M102.465 202.57l13.259 40.812h42.917l-34.718 25.226 13.26 40.814-34.718-25.224-34.72 25.224 13.262-40.814-34.718-25.226h42.915z'/%3e%3cpath fill='%23FFDA44' d='M138.94 259.335l-34.559-12.243s-2.553-23.955-2.708-24.766c-1.173-6.18-6.603-10.851-13.123-10.851-7.376 0-13.357 5.98-13.357 13.357 0 1.223.178 2.402.486 3.528l-9.689 9.755h17.229c0 17.882-13.344 17.882-13.344 35.691l7.402 17.809h44.522l7.422-17.809h-.004a17.782 17.782 0 001.381-5.231c6.397-2.589 8.342-9.24 8.342-9.24z'/%3e%3c/svg%3e"
}, B3 = {
  Flag: K("span")(() => ({
    display: "inline-block",
    backgroundSize: "cover",
    "--mui-tel-input-flag-height": "0.8em",
    height: "var(--mui-tel-input-flag-height)",
    width: "calc(var(--mui-tel-input-flag-height)*3/2)"
  })),
  Span: K("span")(() => ({
    width: "1px",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap"
  }))
}, u3 = (t) => {
  const {
    isoCode: l
  } = t, e = l && l in L3 ? `"${L3[l]}"` : f2;
  return /* @__PURE__ */ w(B3.Flag, {
    "data-testid": l,
    className: "MuiTelInput-Flag",
    style: {
      backgroundImage: `url(${e})`
    },
    children: l ? /* @__PURE__ */ w(B3.Span, {
      children: l
    }) : null
  });
}, y3 = {
  EU: [
    "AD",
    "AL",
    "AT",
    "AX",
    "BA",
    "BE",
    "BG",
    "BY",
    "CH",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "FI",
    "FO",
    "FR",
    "GB",
    "GG",
    "GI",
    "GR",
    "HR",
    "HU",
    "IE",
    "IM",
    "IS",
    "IT",
    "JE",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "MD",
    "ME",
    "MK",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RS",
    "RU",
    "SE",
    "SI",
    "SJ",
    "SK",
    "SM",
    "UA",
    "VA",
    "XK"
  ],
  AS: [
    "AE",
    "AF",
    "AM",
    "AZ",
    "BD",
    "BH",
    "BN",
    "BT",
    "CC",
    "CN",
    "CX",
    "GE",
    "HK",
    "ID",
    "IL",
    "IN",
    "IO",
    "IQ",
    "IR",
    "JO",
    "JP",
    "KG",
    "KH",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LK",
    "MM",
    "MN",
    "MO",
    "MV",
    "MY",
    "NP",
    "OM",
    "PH",
    "PK",
    "PS",
    "QA",
    "SA",
    "SG",
    "SY",
    "TH",
    "TJ",
    "TM",
    "TR",
    "TW",
    "UZ",
    "VN",
    "YE"
  ],
  NA: [
    "AG",
    "AI",
    "AW",
    "BB",
    "BL",
    "BM",
    "BQ",
    "BS",
    "BZ",
    "CA",
    "CR",
    "CU",
    "CW",
    "DM",
    "DO",
    "GD",
    "GL",
    "GP",
    "GT",
    "HN",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "MX",
    "NI",
    "PA",
    "PM",
    "PR",
    "SV",
    "SX",
    "TC",
    "TT",
    "US",
    "VC",
    "VG",
    "VI"
  ],
  SA: [
    "AR",
    "BO",
    "BR",
    "CL",
    "CO",
    "EC",
    "FK",
    "GF",
    "GY",
    "PE",
    "PY",
    "SR",
    "UY",
    "VE"
  ],
  OC: [
    "AS",
    "AU",
    "CK",
    "FJ",
    "FM",
    "GU",
    "KI",
    "MH",
    "MP",
    "NC",
    "NF",
    "NR",
    "NU",
    "NZ",
    "PF",
    "PG",
    "PW",
    "SB",
    "TK",
    "TL",
    "TO",
    "TV",
    "VU",
    "WF",
    "WS"
  ],
  AF: [
    "AO",
    "BF",
    "BI",
    "BJ",
    "BW",
    "CD",
    "CF",
    "CG",
    "CI",
    "CM",
    "CV",
    "DJ",
    "DZ",
    "EG",
    "EH",
    "ER",
    "ET",
    "GA",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GW",
    "KE",
    "KM",
    "LR",
    "LS",
    "LY",
    "MA",
    "MG",
    "ML",
    "MR",
    "MU",
    "MW",
    "MZ",
    "NA",
    "NE",
    "NG",
    "RE",
    "RW",
    "SC",
    "SD",
    "SH",
    "SL",
    "SN",
    "SO",
    "SS",
    "ST",
    "SZ",
    "TD",
    "TG",
    "TN",
    "TZ",
    "UG",
    "YT",
    "ZA",
    "ZM",
    "ZW"
  ]
}, b3 = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "0|(183[12])", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:[25689]\\d|40)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-7]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["[39]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0(4(?:[14]4|56)|[579])?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[02-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|[23]1|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[01359])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[0-79]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-26-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|6[0-289]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-489]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "0|(1001)"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[89]|389)", "5(?:29[89]|389)0"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:29(?:[189][05]|2[29]|3[01])|389[05])\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[08]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "0|([24-9]\\d{6})$", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"], MQ: ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["5"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[129]\\d|31|77|88)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}", [7, 8, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]]], RE: ["262", "00", "976\\d{6}|(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, "26[23]|69|[89]"], RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-5]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|22|33)|4(?:00|4[24]|65|82)|5(?:00|29|58|83)|6(?:00|66|82)|7(?:58|77)|8(?:00|42|5[25]|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:33|55|[679]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]], 883: ["883", 0, "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?", [9, 10, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[35]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function u2(t) {
  return typeof t == "object" && !Array.isArray(t) && t !== null;
}
const g2 = Object.keys, W = b3.countries, $2 = g2(W);
function L(t, l) {
  const e = Array.isArray(t);
  return l ? e && t.length > 0 : e;
}
function m2(t, l) {
  return t.find((e) => l.includes(e)) || null;
}
function k(t) {
  return W[t]?.[0];
}
function P3(t, l) {
  return [...new Set(l.concat(t))];
}
function p2(t) {
  return t.flatMap((l) => y3[l]);
}
function w2(t, l) {
  return t.filter((e) => l.includes(e));
}
function z2(t, l) {
  return L(l, !0) ? t.filter((e) => !l.includes(e)) : t;
}
function M2(t, l) {
  const { onlyCountries: e, excludedCountries: i, continents: a, preferredCountries: d } = l;
  if (L(e, !0)) {
    const c = w2(t, e);
    return L(d, !0) ? P3(c, d) : c;
  }
  const r = L(a, !0) ? p2(a) : t, n = L(d, !0) ? P3(r, d) : r;
  return L(i, !0) ? z2(n, i) : n;
}
function x2(t, l) {
  return t.some((e) => y3[e].includes(l));
}
function H2(t, l) {
  return [...t].sort((e, i) => {
    const a = l.of(e), d = l.of(i);
    return a.localeCompare(d);
  });
}
const A1 = (t) => {
  const {
    isoCode: l,
    isFlagsMenuOpened: e,
    disableDropdown: i,
    splitCallingCode: a,
    ...d
  } = t;
  return /* @__PURE__ */ G(H3, {
    children: [i ? /* @__PURE__ */ w(N3, {
      tabIndex: -1,
      className: "MuiTelInput-IconButton",
      role: "",
      disableRipple: !0,
      sx: {
        pointerEvents: "none"
      },
      component: "span",
      children: /* @__PURE__ */ w(u3, {
        isoCode: l
      })
    }) : /* @__PURE__ */ w(N3, {
      ...d,
      "aria-label": "Select country",
      className: "MuiTelInput-IconButton",
      "aria-haspopup": "listbox",
      "aria-controls": e ? "select-country" : void 0,
      "aria-expanded": e ? "true" : "false",
      children: /* @__PURE__ */ w(u3, {
        isoCode: l
      })
    }), a && l ? /* @__PURE__ */ G(d2, {
      sx: {
        pr: 1,
        mt: 0.3,
        cursor: "default",
        borderRightWidth: 1,
        borderRightColor: "grey.300",
        borderRightStyle: "solid"
      },
      children: ["+", k(l)]
    }) : null]
  });
};
A1.defaultProps = {
  disableDropdown: !1,
  splitCallingCode: !1
};
const E3 = {
  ListItemIcon: K(c2)({
    marginRight: "10px"
  }),
  ListItemText: K(h2)({
    marginRight: "10px"
  })
}, y2 = (t) => {
  const {
    isoCode: l,
    onSelectCountry: e,
    displayNames: i,
    ...a
  } = t, d = (n) => {
    n.preventDefault(), e(l);
  }, r = i.of(l);
  return /* @__PURE__ */ G(r2, {
    ...a,
    onClick: d,
    role: "option",
    "data-testid": `option-${l}`,
    className: "MuiTelInput-MenuItem",
    children: [/* @__PURE__ */ w(E3.ListItemIcon, {
      className: "MuiTelInput-ListItemIcon-flag",
      children: /* @__PURE__ */ w(u3, {
        isoCode: l
      })
    }), /* @__PURE__ */ w(E3.ListItemText, {
      className: "MuiTelInput-ListItemText-country",
      children: r
    }), /* @__PURE__ */ G(n2, {
      variant: "body2",
      color: "text.secondary",
      className: "MuiTelInput-Typography-calling-code",
      children: ["+", W[l]?.[0]]
    })]
  });
}, b2 = g.memo(y2), X = "en";
function _(...t) {
  process.env.NODE_ENV !== "production" && console.error(...t);
}
function A2(t = X) {
  try {
    return new Intl.DisplayNames(t, {
      type: "region"
    });
  } catch (l) {
    return _(l), new Intl.DisplayNames(X, {
      type: "region"
    });
  }
}
const C1 = (t) => {
  const {
    isoCode: l,
    onSelectCountry: e,
    excludedCountries: i,
    onlyCountries: a,
    langOfCountryName: d,
    continents: r,
    preferredCountries: n
  } = t, [c] = g.useState(() => A2(d)), [h] = g.useState(() => {
    const o = H2($2, c);
    return M2(o, {
      onlyCountries: a,
      excludedCountries: i,
      continents: r,
      preferredCountries: n
    });
  }), [s] = g.useState(() => e);
  return /* @__PURE__ */ w(H3, {
    children: h.map((o) => /* @__PURE__ */ w(b2, {
      onSelectCountry: s,
      isoCode: o,
      displayNames: c,
      selected: o === l,
      id: `country-${o}`
    }, o))
  });
};
C1.defaultProps = {
  onlyCountries: [],
  excludedCountries: [],
  continents: [],
  preferredCountries: [],
  langOfCountryName: X
};
const F1 = (t) => {
  const {
    anchorEl: l,
    isoCode: e,
    onSelectCountry: i,
    excludedCountries: a,
    onlyCountries: d,
    langOfCountryName: r,
    continents: n,
    preferredCountries: c,
    className: h,
    ...s
  } = t;
  return /* @__PURE__ */ w(s2, {
    anchorEl: l,
    open: Boolean(l),
    id: "select-country",
    className: `MuiTelInput-Menu ${h || ""}`,
    MenuListProps: {
      role: "listbox",
      "aria-activedescendant": e ? `country-${e}` : "",
      "aria-labelledby": "select-country"
    },
    ...s,
    children: /* @__PURE__ */ w(C1, {
      onlyCountries: d,
      excludedCountries: a,
      preferredCountries: c,
      continents: n,
      isoCode: e,
      langOfCountryName: r,
      onSelectCountry: i
    })
  });
};
F1.defaultProps = {
  onlyCountries: [],
  excludedCountries: [],
  continents: [],
  preferredCountries: [],
  langOfCountryName: X
};
function C2(t) {
  t.focus();
  const { length: l } = t.value;
  t.setSelectionRange(l, l);
}
function n3(t, l) {
  typeof l == "function" ? l(t) : l && u2(l) && "current" in l && (l.current = t);
}
function F2(t) {
  const { defaultCountry: l, onlyCountries: e, excludedCountries: i, continents: a } = t;
  g.useEffect(() => {
    if (e && i) {
      const d = m2(
        e,
        i
      );
      d && _(
        `[mui-tel-input] Not expected to have the country ${d} to be included in the 'onlyCountries' AND 'excludedCountries' props`
      );
    }
  }, [e, i]), g.useEffect(() => {
    l && i && i.includes(l) && _(
      `[mui-tel-input] Not expected to have the 'defaultCountry' (${l}) prop excluded by the 'excludedCountries' prop`
    );
  }, [l, i]), g.useEffect(() => {
    l && e && !e.includes(l) && _(
      `[mui-tel-input] Not expected to have a 'defaultCountry' prop (${l}) and a 'onlyCountries' prop but without included the 'defaultCountry' (${l})`
    );
  }, [l, e]), g.useEffect(() => {
    l && a && a.length > 0 && (a.some((r) => y3[r].includes(l)) || _(
      `[mui-tel-input] Not expected to have a 'defaultCountry' prop (${l}) and a 'continents' prop that are not contain the country (${l})`
    ));
  }, [l, a]);
}
function D2(t, l) {
  var e = Array.prototype.slice.call(l);
  return e.push(b3), t.apply(this, e);
}
function g3(t) {
  return g3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, g3(t);
}
function I3(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function N2(t, l, e) {
  return l && I3(t.prototype, l), e && I3(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function L2(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function B2(t, l) {
  if (typeof l != "function" && l !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(l && l.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), l && j(t, l);
}
function P2(t) {
  var l = N1();
  return function() {
    var i = U(t), a;
    if (l) {
      var d = U(this).constructor;
      a = Reflect.construct(i, arguments, d);
    } else
      a = i.apply(this, arguments);
    return E2(this, a);
  };
}
function E2(t, l) {
  if (l && (g3(l) === "object" || typeof l == "function"))
    return l;
  if (l !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return D1(t);
}
function D1(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function $3(t) {
  var l = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return $3 = function(i) {
    if (i === null || !I2(i))
      return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof l < "u") {
      if (l.has(i))
        return l.get(i);
      l.set(i, a);
    }
    function a() {
      return Z(i, arguments, U(this).constructor);
    }
    return a.prototype = Object.create(i.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), j(a, i);
  }, $3(t);
}
function Z(t, l, e) {
  return N1() ? Z = Reflect.construct : Z = function(a, d, r) {
    var n = [null];
    n.push.apply(n, d);
    var c = Function.bind.apply(a, n), h = new c();
    return r && j(h, r.prototype), h;
  }, Z.apply(null, arguments);
}
function N1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function I2(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function j(t, l) {
  return j = Object.setPrototypeOf || function(i, a) {
    return i.__proto__ = a, i;
  }, j(t, l);
}
function U(t) {
  return U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, U(t);
}
var E = /* @__PURE__ */ function(t) {
  B2(e, t);
  var l = P2(e);
  function e(i) {
    var a;
    return L2(this, e), a = l.call(this, i), Object.setPrototypeOf(D1(a), e.prototype), a.name = a.constructor.name, a;
  }
  return N2(e);
}(/* @__PURE__ */ $3(Error)), A3 = 2, S2 = 17, O2 = 3, b = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9", T2 = "-\u2010-\u2015\u2212\u30FC\uFF0D", V2 = "\uFF0F/", R2 = "\uFF0E.", k2 = " \xA0\xAD\u200B\u2060\u3000", _2 = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]", G2 = "~\u2053\u223C\uFF5E", F = "".concat(T2).concat(V2).concat(R2).concat(k2).concat(_2).concat(G2), e3 = "+\uFF0B";
function S3(t, l) {
  t = t.split("-"), l = l.split("-");
  for (var e = t[0].split("."), i = l[0].split("."), a = 0; a < 3; a++) {
    var d = Number(e[a]), r = Number(i[a]);
    if (d > r)
      return 1;
    if (r > d)
      return -1;
    if (!isNaN(d) && isNaN(r))
      return 1;
    if (isNaN(d) && !isNaN(r))
      return -1;
  }
  return t[1] && l[1] ? t[1] > l[1] ? 1 : t[1] < l[1] ? -1 : 0 : !t[1] && l[1] ? 1 : t[1] && !l[1] ? -1 : 0;
}
function J(t) {
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, J(t);
}
function t3(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function O3(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function l3(t, l, e) {
  return l && O3(t.prototype, l), e && O3(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var j2 = "1.2.0", U2 = "1.7.35", T3 = " ext. ", W2 = /^\d+$/, H = /* @__PURE__ */ function() {
  function t(l) {
    t3(this, t), X2(l), this.metadata = l, L1.call(this, l);
  }
  return l3(t, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(e) {
        return e !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(e) {
      return this.metadata.countries[e];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(e) {
      return this.getCountryMetadata(e) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(e) {
      if (this.getCountryCodesForCallingCode(e))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[e])
          return !0;
      } else {
        var i = this.countryCallingCodes()[e];
        if (i && i.length === 1 && i[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(e) {
      return this.nonGeographic() ? !!this.nonGeographic()[e] : !this.getCountryCodesForCallingCode(e);
    }
  }, {
    key: "country",
    value: function(e) {
      return this.selectNumberingPlan(e);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(e, i) {
      if (e && W2.test(e) && (i = e, e = null), e && e !== "001") {
        if (!this.hasCountry(e))
          throw new Error("Unknown country: ".concat(e));
        this.numberingPlan = new V3(this.getCountryMetadata(e), this);
      } else if (i) {
        if (!this.hasCallingCode(i))
          throw new Error("Unknown calling code: ".concat(i));
        this.numberingPlan = new V3(this.getNumberingPlanMetadata(i), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(e) {
      var i = this.countryCallingCodes()[e];
      if (i)
        return i.length === 1 && i[0].length === 3 ? void 0 : i;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(e) {
      var i = this.getCountryCodesForCallingCode(e);
      if (i)
        return i[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(e) {
      var i = this.getCountryCodeForCallingCode(e);
      if (i)
        return this.getCountryMetadata(i);
      if (this.nonGeographic()) {
        var a = this.nonGeographic()[e];
        if (a)
          return a;
      } else {
        var d = this.countryCallingCodes()[e];
        if (d && d.length === 1 && d[0] === "001")
          return this.metadata.countries["001"];
      }
    }
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
  }, {
    key: "type",
    value: function(e) {
      return this.numberingPlan.type(e);
    }
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(e) {
      return this.selectNumberingPlan(e);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]), t;
}(), V3 = /* @__PURE__ */ function() {
  function t(l, e) {
    t3(this, t), this.globalMetadataObject = e, this.metadata = l, L1.call(this, e.metadata);
  }
  return l3(t, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(e) {
      return e[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
  }, {
    key: "formats",
    value: function() {
      var e = this, i = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return i.map(function(a) {
        return new Z2(a, e);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(e) {
      return e[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(e) {
      if (this.hasTypes() && R3(this.types(), e))
        return new K2(R3(this.types(), e), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? T3 : this.metadata[13] || T3;
    }
  }]), t;
}(), Z2 = /* @__PURE__ */ function() {
  function t(l, e) {
    t3(this, t), this._format = l, this.metadata = e;
  }
  return l3(t, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && !Y2.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), t;
}(), Y2 = /^\(?\$1\)?$/, K2 = /* @__PURE__ */ function() {
  function t(l, e) {
    t3(this, t), this.type = l, this.metadata = e;
  }
  return l3(t, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]), t;
}();
function R3(t, l) {
  switch (l) {
    case "FIXED_LINE":
      return t[0];
    case "MOBILE":
      return t[1];
    case "TOLL_FREE":
      return t[2];
    case "PREMIUM_RATE":
      return t[3];
    case "PERSONAL_NUMBER":
      return t[4];
    case "VOICEMAIL":
      return t[5];
    case "UAN":
      return t[6];
    case "PAGER":
      return t[7];
    case "VOIP":
      return t[8];
    case "SHARED_COST":
      return t[9];
  }
}
function X2(t) {
  if (!t)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!c3(t) || !c3(t.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(c3(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + J2(t) + ": " + t, "."));
}
var c3 = function(l) {
  return J(l) === "object";
}, J2 = function(l) {
  return J(l);
};
function C3(t, l) {
  if (l = new H(l), l.hasCountry(t))
    return l.country(t).countryCallingCode();
  throw new Error("Unknown country: ".concat(t));
}
function Q2(t, l) {
  return l.countries[t] !== void 0;
}
function L1(t) {
  var l = t.version;
  typeof l == "number" ? (this.v1 = l === 1, this.v2 = l === 2, this.v3 = l === 3, this.v4 = l === 4) : l ? S3(l, j2) === -1 ? this.v2 = !0 : S3(l, U2) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var q2 = ";ext=", S = function(l) {
  return "([".concat(b, "]{1,").concat(l, "})");
};
function B1(t) {
  var l = "20", e = "15", i = "9", a = "6", d = "[ \xA0\\t,]*", r = "[:\\.\uFF0E]?[ \xA0\\t,-]*", n = "#?", c = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)", h = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)", s = "[- ]+", o = "[ \xA0\\t]*", v = "(?:,{2}|;)", M = q2 + S(l), u = d + c + r + S(l) + n, $ = d + h + r + S(i) + n, z = s + S(a) + "#", y = o + v + r + S(e) + n, A = o + "(?:,)+" + r + S(i) + n;
  return M + "|" + u + "|" + $ + "|" + z + "|" + y + "|" + A;
}
var e0 = "[" + b + "]{" + A3 + "}", t0 = "[" + e3 + "]{0,1}(?:[" + F + "]*[" + b + "]){3,}[" + F + b + "]*", l0 = new RegExp("^[" + e3 + "]{0,1}(?:[" + F + "]*[" + b + "]){1,2}$", "i"), i0 = t0 + "(?:" + B1() + ")?", a0 = new RegExp(
  "^" + e0 + "$|^" + i0 + "$",
  "i"
);
function P1(t) {
  return t.length >= A3 && a0.test(t);
}
function d0(t) {
  return l0.test(t);
}
var k3 = new RegExp("(?:" + B1() + ")$", "i");
function r0(t) {
  var l = t.search(k3);
  if (l < 0)
    return {};
  for (var e = t.slice(0, l), i = t.match(k3), a = 1; a < i.length; ) {
    if (i[a])
      return {
        number: e,
        ext: i[a]
      };
    a++;
  }
}
function n0(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = c0(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c0(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return _3(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return _3(t, l);
  }
}
function _3(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
var h0 = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "\uFF10": "0",
  "\uFF11": "1",
  "\uFF12": "2",
  "\uFF13": "3",
  "\uFF14": "4",
  "\uFF15": "5",
  "\uFF16": "6",
  "\uFF17": "7",
  "\uFF18": "8",
  "\uFF19": "9",
  "\u0660": "0",
  "\u0661": "1",
  "\u0662": "2",
  "\u0663": "3",
  "\u0664": "4",
  "\u0665": "5",
  "\u0666": "6",
  "\u0667": "7",
  "\u0668": "8",
  "\u0669": "9",
  "\u06F0": "0",
  "\u06F1": "1",
  "\u06F2": "2",
  "\u06F3": "3",
  "\u06F4": "4",
  "\u06F5": "5",
  "\u06F6": "6",
  "\u06F7": "7",
  "\u06F8": "8",
  "\u06F9": "9"
};
function E1(t) {
  return h0[t];
}
function Q(t) {
  for (var l = "", e = n0(t.split("")), i; !(i = e()).done; ) {
    var a = i.value, d = E1(a);
    d && (l += d);
  }
  return l;
}
function s0(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = o0(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o0(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return G3(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return G3(t, l);
  }
}
function G3(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function j3(t) {
  for (var l = "", e = s0(t.split("")), i; !(i = e()).done; ) {
    var a = i.value;
    l += v0(a, l) || "";
  }
  return l;
}
function v0(t, l) {
  return t === "+" ? l ? void 0 : "+" : E1(t);
}
function f0(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = u0(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u0(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return U3(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return U3(t, l);
  }
}
function U3(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function g0(t, l) {
  for (var e = t.slice(), i = f0(l), a; !(a = i()).done; ) {
    var d = a.value;
    t.indexOf(d) < 0 && e.push(d);
  }
  return e.sort(function(r, n) {
    return r - n;
  });
}
function i3(t, l) {
  return I1(t, void 0, l);
}
function I1(t, l, e) {
  var i = e.type(l), a = i && i.possibleLengths() || e.possibleLengths();
  if (!a)
    return "IS_POSSIBLE";
  if (l === "FIXED_LINE_OR_MOBILE") {
    if (!e.type("FIXED_LINE"))
      return I1(t, "MOBILE", e);
    var d = e.type("MOBILE");
    d && (a = g0(a, d.possibleLengths()));
  } else if (l && !i)
    return "INVALID_LENGTH";
  var r = t.length, n = a[0];
  return n === r ? "IS_POSSIBLE" : n > r ? "TOO_SHORT" : a[a.length - 1] < r ? "TOO_LONG" : a.indexOf(r, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function $0(t, l, e) {
  if (l === void 0 && (l = {}), e = new H(e), l.v2) {
    if (!t.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    e.selectNumberingPlan(t.countryCallingCode);
  } else {
    if (!t.phone)
      return !1;
    if (t.country) {
      if (!e.hasCountry(t.country))
        throw new Error("Unknown country: ".concat(t.country));
      e.country(t.country);
    } else {
      if (!t.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      e.selectNumberingPlan(t.countryCallingCode);
    }
  }
  if (e.possibleLengths())
    return S1(t.phone || t.nationalNumber, e);
  if (t.countryCallingCode && e.isNonGeographicCallingCode(t.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function S1(t, l) {
  switch (i3(t, l)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function m0(t, l) {
  return z0(t) || w0(t, l) || O1(t, l) || p0();
}
function p0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w0(t, l) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var i = [], a = !0, d = !1, r, n;
    try {
      for (e = e.call(t); !(a = (r = e.next()).done) && (i.push(r.value), !(l && i.length === l)); a = !0)
        ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        !a && e.return != null && e.return();
      } finally {
        if (d)
          throw n;
      }
    }
    return i;
  }
}
function z0(t) {
  if (Array.isArray(t))
    return t;
}
function M0(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = O1(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O1(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return W3(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return W3(t, l);
  }
}
function W3(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function x0(t) {
  var l, e;
  t = t.replace(/^tel:/, "tel=");
  for (var i = M0(t.split(";")), a; !(a = i()).done; ) {
    var d = a.value, r = d.split("="), n = m0(r, 2), c = n[0], h = n[1];
    switch (c) {
      case "tel":
        l = h;
        break;
      case "ext":
        e = h;
        break;
      case "phone-context":
        h[0] === "+" && (l = h + l);
        break;
    }
  }
  if (!P1(l))
    return {};
  var s = {
    number: l
  };
  return e && (s.ext = e), s;
}
function H0(t) {
  var l = t.number, e = t.ext;
  if (!l)
    return "";
  if (l[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(l).concat(e ? ";ext=" + e : "");
}
function B(t, l) {
  return t = t || "", new RegExp("^(?:" + l + ")$").test(t);
}
function y0(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = b0(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b0(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return Z3(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Z3(t, l);
  }
}
function Z3(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
var A0 = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function F3(t, l, e) {
  if (l = l || {}, !!t.country) {
    e = new H(e), e.selectNumberingPlan(t.country, t.countryCallingCode);
    var i = l.v2 ? t.nationalNumber : t.phone;
    if (!!B(i, e.nationalNumberPattern())) {
      if (h3(i, "FIXED_LINE", e))
        return e.type("MOBILE") && e.type("MOBILE").pattern() === "" || !e.type("MOBILE") || h3(i, "MOBILE", e) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var a = y0(A0), d; !(d = a()).done; ) {
        var r = d.value;
        if (h3(i, r, e))
          return r;
      }
    }
  }
}
function h3(t, l, e) {
  return l = e.type(l), !l || !l.pattern() || l.possibleLengths() && l.possibleLengths().indexOf(t.length) < 0 ? !1 : B(t, l.pattern());
}
function C0(t, l, e) {
  if (l = l || {}, e = new H(e), !t.country)
    return !1;
  if (e.selectNumberingPlan(t.country, t.countryCallingCode), e.hasTypes())
    return F3(t, l, e.metadata) !== void 0;
  var i = l.v2 ? t.nationalNumber : t.phone;
  return B(i, e.nationalNumberPattern());
}
function T1(t) {
  return t.replace(new RegExp("[".concat(F, "]+"), "g"), " ").trim();
}
var V1 = /(\$\d)/;
function R1(t, l, e) {
  var i = e.useInternationalFormat, a = e.withNationalPrefix;
  e.carrierCode, e.metadata;
  var d = t.replace(new RegExp(l.pattern()), i ? l.internationalFormat() : a && l.nationalPrefixFormattingRule() ? l.format().replace(V1, l.nationalPrefixFormattingRule()) : l.format());
  return i ? T1(d) : d;
}
var F0 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function D0(t, l, e) {
  var i = new H(e);
  if (i.selectNumberingPlan(t, l), i.defaultIDDPrefix())
    return i.defaultIDDPrefix();
  if (F0.test(i.IDDPrefix()))
    return i.IDDPrefix();
}
function N0(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = L0(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L0(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return Y3(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Y3(t, l);
  }
}
function Y3(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function K3(t, l) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    l && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function X3(t) {
  for (var l = 1; l < arguments.length; l++) {
    var e = arguments[l] != null ? arguments[l] : {};
    l % 2 ? K3(Object(e), !0).forEach(function(i) {
      B0(t, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : K3(Object(e)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return t;
}
function B0(t, l, e) {
  return l in t ? Object.defineProperty(t, l, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[l] = e, t;
}
var J3 = {
  formatExtension: function(l, e, i) {
    return "".concat(l).concat(i.ext()).concat(e);
  }
};
function P0(t, l, e, i) {
  if (e ? e = X3(X3({}, J3), e) : e = J3, i = new H(i), t.country && t.country !== "001") {
    if (!i.hasCountry(t.country))
      throw new Error("Unknown country: ".concat(t.country));
    i.country(t.country);
  } else if (t.countryCallingCode)
    i.selectNumberingPlan(t.countryCallingCode);
  else
    return t.phone || "";
  var a = i.countryCallingCode(), d = e.v2 ? t.nationalNumber : t.phone, r;
  switch (l) {
    case "NATIONAL":
      return d ? (r = q(d, t.carrierCode, "NATIONAL", i, e), s3(r, t.ext, i, e.formatExtension)) : "";
    case "INTERNATIONAL":
      return d ? (r = q(d, null, "INTERNATIONAL", i, e), r = "+".concat(a, " ").concat(r), s3(r, t.ext, i, e.formatExtension)) : "+".concat(a);
    case "E.164":
      return "+".concat(a).concat(d);
    case "RFC3966":
      return H0({
        number: "+".concat(a).concat(d),
        ext: t.ext
      });
    case "IDD":
      if (!e.fromCountry)
        return;
      var n = I0(d, t.carrierCode, a, e.fromCountry, i);
      return s3(n, t.ext, i, e.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(l, '"'));
  }
}
function q(t, l, e, i, a) {
  var d = E0(i.formats(), t);
  return d ? R1(t, d, {
    useInternationalFormat: e === "INTERNATIONAL",
    withNationalPrefix: !(d.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && a && a.nationalPrefix === !1),
    carrierCode: l,
    metadata: i
  }) : t;
}
function E0(t, l) {
  for (var e = N0(t), i; !(i = e()).done; ) {
    var a = i.value;
    if (a.leadingDigitsPatterns().length > 0) {
      var d = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
      if (l.search(d) !== 0)
        continue;
    }
    if (B(l, a.pattern()))
      return a;
  }
}
function s3(t, l, e, i) {
  return l ? i(t, l, e) : t;
}
function I0(t, l, e, i, a) {
  var d = C3(i, a.metadata);
  if (d === e) {
    var r = q(t, l, "NATIONAL", a);
    return e === "1" ? e + " " + r : r;
  }
  var n = D0(i, void 0, a.metadata);
  if (n)
    return "".concat(n, " ").concat(e, " ").concat(q(t, null, "INTERNATIONAL", a));
}
function Q3(t, l) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    l && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function q3(t) {
  for (var l = 1; l < arguments.length; l++) {
    var e = arguments[l] != null ? arguments[l] : {};
    l % 2 ? Q3(Object(e), !0).forEach(function(i) {
      S0(t, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Q3(Object(e)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return t;
}
function S0(t, l, e) {
  return l in t ? Object.defineProperty(t, l, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[l] = e, t;
}
function O0(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function e1(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function T0(t, l, e) {
  return l && e1(t.prototype, l), e && e1(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var k1 = /* @__PURE__ */ function() {
  function t(l, e, i) {
    if (O0(this, t), !l)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!e)
      throw new TypeError("`nationalNumber` not passed");
    if (!i)
      throw new TypeError("`metadata` not passed");
    var a = new H(i);
    V0(l) && (this.country = l, a.country(l), l = a.countryCallingCode()), this.countryCallingCode = l, this.nationalNumber = e, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = i;
  }
  return T0(t, [{
    key: "setExt",
    value: function(e) {
      this.ext = e;
    }
  }, {
    key: "isPossible",
    value: function() {
      return $0(this, {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "isValid",
    value: function() {
      return C0(this, {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var e = new H(this.metadata);
      return e.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(e) {
      return this.number === e.number && this.ext === e.ext;
    }
  }, {
    key: "getType",
    value: function() {
      return F3(this, {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "format",
    value: function(e, i) {
      return P0(this, e, i ? q3(q3({}, i), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "formatNational",
    value: function(e) {
      return this.format("NATIONAL", e);
    }
  }, {
    key: "formatInternational",
    value: function(e) {
      return this.format("INTERNATIONAL", e);
    }
  }, {
    key: "getURI",
    value: function(e) {
      return this.format("RFC3966", e);
    }
  }]), t;
}(), V0 = function(l) {
  return /^[A-Z]{2}$/.test(l);
}, R0 = new RegExp("([" + b + "])");
function _1(t, l, e, i) {
  if (!!l) {
    var a = new H(i);
    a.selectNumberingPlan(l, e);
    var d = new RegExp(a.IDDPrefix());
    if (t.search(d) === 0) {
      t = t.slice(t.match(d)[0].length);
      var r = t.match(R0);
      if (!(r && r[1] != null && r[1].length > 0 && r[1] === "0"))
        return t;
    }
  }
}
function m3(t, l) {
  if (t && l.numberingPlan.nationalPrefixForParsing()) {
    var e = new RegExp("^(?:" + l.numberingPlan.nationalPrefixForParsing() + ")"), i = e.exec(t);
    if (i) {
      var a, d, r = i.length - 1, n = r > 0 && i[r];
      if (l.nationalPrefixTransformRule() && n)
        a = t.replace(e, l.nationalPrefixTransformRule()), r > 1 && (d = i[1]);
      else {
        var c = i[0];
        a = t.slice(c.length), n && (d = i[1]);
      }
      var h;
      if (n) {
        var s = t.indexOf(i[1]), o = t.slice(0, s);
        o === l.numberingPlan.nationalPrefix() && (h = l.numberingPlan.nationalPrefix());
      } else
        h = i[0];
      return {
        nationalNumber: a,
        nationalPrefix: h,
        carrierCode: d
      };
    }
  }
  return {
    nationalNumber: t
  };
}
function p3(t, l) {
  var e = m3(t, l), i = e.carrierCode, a = e.nationalNumber;
  if (a !== t) {
    if (!k0(t, a, l))
      return {
        nationalNumber: t
      };
    if (l.possibleLengths() && !_0(a, l))
      return {
        nationalNumber: t
      };
  }
  return {
    nationalNumber: a,
    carrierCode: i
  };
}
function k0(t, l, e) {
  return !(B(t, e.nationalNumberPattern()) && !B(l, e.nationalNumberPattern()));
}
function _0(t, l) {
  switch (i3(t, l)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function G1(t, l, e, i) {
  var a = l ? C3(l, i) : e;
  if (t.indexOf(a) === 0) {
    i = new H(i), i.selectNumberingPlan(l, e);
    var d = t.slice(a.length), r = p3(d, i), n = r.nationalNumber, c = p3(t, i), h = c.nationalNumber;
    if (!B(h, i.nationalNumberPattern()) && B(n, i.nationalNumberPattern()) || i3(h, i) === "TOO_LONG")
      return {
        countryCallingCode: a,
        number: d
      };
  }
  return {
    number: t
  };
}
function j1(t, l, e, i) {
  if (!t)
    return {};
  if (t[0] !== "+") {
    var a = _1(t, l, e, i);
    if (a && a !== t)
      t = "+" + a;
    else {
      if (l || e) {
        var d = G1(t, l, e, i), r = d.countryCallingCode, n = d.number;
        if (r)
          return {
            countryCallingCode: r,
            number: n
          };
      }
      return {
        number: t
      };
    }
  }
  if (t[1] === "0")
    return {};
  i = new H(i);
  for (var c = 2; c - 1 <= O2 && c <= t.length; ) {
    var h = t.slice(1, c);
    if (i.hasCallingCode(h))
      return i.selectNumberingPlan(h), {
        countryCallingCode: h,
        number: t.slice(c)
      };
    c++;
  }
  return {};
}
function G0(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = j0(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j0(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return t1(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return t1(t, l);
  }
}
function t1(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
var U0 = !1;
function U1(t, l, e) {
  if (U0 && e.isNonGeographicCallingCode(t))
    return "001";
  var i = e.getCountryCodesForCallingCode(t);
  if (!!i)
    return i.length === 1 ? i[0] : W0(i, l, e.metadata);
}
function W0(t, l, e) {
  e = new H(e);
  for (var i = G0(t), a; !(a = i()).done; ) {
    var d = a.value;
    if (e.country(d), e.leadingDigits()) {
      if (l && l.search(e.leadingDigits()) === 0)
        return d;
    } else if (F3({
      phone: l,
      country: d
    }, void 0, e.metadata))
      return d;
  }
}
var Z0 = 250, Y0 = new RegExp("[" + e3 + b + "]"), K0 = new RegExp("[^" + b + "#]+$");
function X0(t, l, e) {
  if (l = l || {}, e = new H(e), l.defaultCountry && !e.hasCountry(l.defaultCountry))
    throw l.v2 ? new E("INVALID_COUNTRY") : new Error("Unknown country: ".concat(l.defaultCountry));
  var i = Q0(t, l.v2, l.extract), a = i.number, d = i.ext, r = i.error;
  if (!a) {
    if (l.v2)
      throw r === "TOO_SHORT" ? new E("TOO_SHORT") : new E("NOT_A_NUMBER");
    return {};
  }
  var n = e4(a, l.defaultCountry, l.defaultCallingCode, e), c = n.country, h = n.nationalNumber, s = n.countryCallingCode, o = n.carrierCode;
  if (!e.hasSelectedNumberingPlan()) {
    if (l.v2)
      throw new E("INVALID_COUNTRY");
    return {};
  }
  if (!h || h.length < A3) {
    if (l.v2)
      throw new E("TOO_SHORT");
    return {};
  }
  if (h.length > S2) {
    if (l.v2)
      throw new E("TOO_LONG");
    return {};
  }
  if (l.v2) {
    var v = new k1(s, h, e.metadata);
    return c && (v.country = c), o && (v.carrierCode = o), d && (v.ext = d), v;
  }
  var M = (l.extended ? e.hasSelectedNumberingPlan() : c) ? B(h, e.nationalNumberPattern()) : !1;
  return l.extended ? {
    country: c,
    countryCallingCode: s,
    carrierCode: o,
    valid: M,
    possible: M ? !0 : !!(l.extended === !0 && e.possibleLengths() && S1(h, e)),
    phone: h,
    ext: d
  } : M ? q0(c, h, d) : {};
}
function J0(t, l, e) {
  if (!!t) {
    if (t.length > Z0) {
      if (e)
        throw new E("TOO_LONG");
      return;
    }
    if (l === !1)
      return t;
    var i = t.search(Y0);
    if (!(i < 0))
      return t.slice(i).replace(K0, "");
  }
}
function Q0(t, l, e) {
  if (t && t.indexOf("tel:") === 0)
    return x0(t);
  var i = J0(t, e, l);
  if (!i)
    return {};
  if (!P1(i))
    return d0(i) ? {
      error: "TOO_SHORT"
    } : {};
  var a = r0(i);
  return a.ext ? a : {
    number: i
  };
}
function q0(t, l, e) {
  var i = {
    country: t,
    phone: l
  };
  return e && (i.ext = e), i;
}
function e4(t, l, e, i) {
  var a = j1(j3(t), l, e, i.metadata), d = a.countryCallingCode, r = a.number, n;
  if (d)
    i.selectNumberingPlan(d);
  else if (r && (l || e))
    i.selectNumberingPlan(l, e), l && (n = l), d = e || C3(l, i.metadata);
  else
    return {};
  if (!r)
    return {
      countryCallingCode: d
    };
  var c = p3(j3(r), i), h = c.nationalNumber, s = c.carrierCode, o = U1(d, h, i);
  return o && (n = o, o === "001" || i.country(n)), {
    country: n,
    countryCallingCode: d,
    nationalNumber: h,
    carrierCode: s
  };
}
function l1(t, l) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    l && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function i1(t) {
  for (var l = 1; l < arguments.length; l++) {
    var e = arguments[l] != null ? arguments[l] : {};
    l % 2 ? l1(Object(e), !0).forEach(function(i) {
      t4(t, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : l1(Object(e)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return t;
}
function t4(t, l, e) {
  return l in t ? Object.defineProperty(t, l, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[l] = e, t;
}
function l4(t, l, e) {
  return X0(t, i1(i1({}, l), {}, {
    v2: !0
  }), e);
}
function w3(t) {
  return w3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, w3(t);
}
function a1(t, l) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    l && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function i4(t) {
  for (var l = 1; l < arguments.length; l++) {
    var e = arguments[l] != null ? arguments[l] : {};
    l % 2 ? a1(Object(e), !0).forEach(function(i) {
      a4(t, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : a1(Object(e)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return t;
}
function a4(t, l, e) {
  return l in t ? Object.defineProperty(t, l, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[l] = e, t;
}
function d4(t, l) {
  return h4(t) || c4(t, l) || n4(t, l) || r4();
}
function r4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n4(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return d1(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return d1(t, l);
  }
}
function d1(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function c4(t, l) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var i = [], a = !0, d = !1, r, n;
    try {
      for (e = e.call(t); !(a = (r = e.next()).done) && (i.push(r.value), !(l && i.length === l)); a = !0)
        ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        !a && e.return != null && e.return();
      } finally {
        if (d)
          throw n;
      }
    }
    return i;
  }
}
function h4(t) {
  if (Array.isArray(t))
    return t;
}
function s4(t) {
  var l = Array.prototype.slice.call(t), e = d4(l, 4), i = e[0], a = e[1], d = e[2], r = e[3], n, c, h;
  if (typeof i == "string")
    n = i;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!a || typeof a == "string")
    r ? (c = d, h = r) : (c = void 0, h = d), a && (c = i4({
      defaultCountry: a
    }, c));
  else if (o4(a))
    d ? (c = a, h = d) : h = a;
  else
    throw new Error("Invalid second argument: ".concat(a));
  return {
    text: n,
    options: c,
    metadata: h
  };
}
var o4 = function(l) {
  return w3(l) === "object";
};
function r1(t, l) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    l && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function n1(t) {
  for (var l = 1; l < arguments.length; l++) {
    var e = arguments[l] != null ? arguments[l] : {};
    l % 2 ? r1(Object(e), !0).forEach(function(i) {
      v4(t, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : r1(Object(e)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return t;
}
function v4(t, l, e) {
  return l in t ? Object.defineProperty(t, l, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[l] = e, t;
}
function f4(t, l, e) {
  l && l.defaultCountry && !Q2(l.defaultCountry, e) && (l = n1(n1({}, l), {}, {
    defaultCountry: void 0
  }));
  try {
    return l4(t, l, e);
  } catch (i) {
    if (!(i instanceof E))
      throw i;
  }
}
function c1(t, l) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    l && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function h1(t) {
  for (var l = 1; l < arguments.length; l++) {
    var e = arguments[l] != null ? arguments[l] : {};
    l % 2 ? c1(Object(e), !0).forEach(function(i) {
      u4(t, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : c1(Object(e)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return t;
}
function u4(t, l, e) {
  return l in t ? Object.defineProperty(t, l, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[l] = e, t;
}
function g4() {
  var t = s4(arguments), l = t.text, e = t.options, i = t.metadata;
  e = h1(h1({}, e), {}, {
    extract: !1
  });
  var a = f4(l, e, i);
  return a && a.isValid() || !1;
}
function $4(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function s1(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function m4(t, l, e) {
  return l && s1(t.prototype, l), e && s1(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var p4 = /* @__PURE__ */ function() {
  function t(l) {
    var e = l.onCountryChange, i = l.onCallingCodeChange;
    $4(this, t), this.onCountryChange = e, this.onCallingCodeChange = i;
  }
  return m4(t, [{
    key: "reset",
    value: function(e, i) {
      this.international = !1, this.IDDPrefix = void 0, this.missingPlus = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(e, i);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function() {
      this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0;
    }
  }, {
    key: "update",
    value: function(e) {
      for (var i = 0, a = Object.keys(e); i < a.length; i++) {
        var d = a[i];
        this[d] = e[d];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function(e, i) {
      this.setCountry(e), this.setCallingCode(i);
    }
  }, {
    key: "setCountry",
    value: function(e) {
      this.country = e, this.onCountryChange(e);
    }
  }, {
    key: "setCallingCode",
    value: function(e) {
      this.callingCode = e, this.onCallingCodeChange(e, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function(e, i) {
      this.international = !0, this.initCountryAndCallingCode(e, i);
    }
  }, {
    key: "appendDigits",
    value: function(e) {
      this.digits += e;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function(e) {
      this.nationalSignificantNumber += e;
    }
  }, {
    key: "getNationalDigits",
    value: function() {
      return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function() {
      return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
    }
  }]), t;
}();
function w4(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = z4(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z4(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return o1(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return o1(t, l);
  }
}
function o1(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
var C = "x", o3 = new RegExp(C);
function Y(t, l) {
  if (l < 1)
    return "";
  for (var e = ""; l > 1; )
    l & 1 && (e += t), l >>= 1, t += t;
  return e + t;
}
function v1(t, l) {
  return t[l] === ")" && l++, M4(t.slice(0, l));
}
function M4(t) {
  for (var l = [], e = 0; e < t.length; )
    t[e] === "(" ? l.push(e) : t[e] === ")" && l.pop(), e++;
  var i = 0, a = "";
  l.push(t.length);
  for (var d = 0, r = l; d < r.length; d++) {
    var n = r[d];
    a += t.slice(i, n), i = n + 1;
  }
  return a;
}
function x4(t, l, e) {
  for (var i = w4(e.split("")), a; !(a = i()).done; ) {
    var d = a.value;
    if (t.slice(l + 1).search(o3) < 0)
      return;
    l = t.search(o3), t = t.replace(o3, d);
  }
  return [t, l];
}
function H4(t, l, e) {
  var i = e.metadata, a = e.shouldTryNationalPrefixFormattingRule, d = e.getSeparatorAfterNationalPrefix, r = new RegExp("^(?:".concat(l.pattern(), ")$"));
  if (r.test(t.nationalSignificantNumber))
    return b4(t, l, {
      metadata: i,
      shouldTryNationalPrefixFormattingRule: a,
      getSeparatorAfterNationalPrefix: d
    });
}
function y4(t, l) {
  return i3(t, l) === "IS_POSSIBLE";
}
function b4(t, l, e) {
  var i = e.metadata, a = e.shouldTryNationalPrefixFormattingRule, d = e.getSeparatorAfterNationalPrefix;
  if (t.nationalSignificantNumber, t.international, t.nationalPrefix, t.carrierCode, a(l)) {
    var r = f1(t, l, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: d,
      metadata: i
    });
    if (r)
      return r;
  }
  return f1(t, l, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: d,
    metadata: i
  });
}
function f1(t, l, e) {
  var i = e.metadata, a = e.useNationalPrefixFormattingRule, d = e.getSeparatorAfterNationalPrefix, r = R1(t.nationalSignificantNumber, l, {
    carrierCode: t.carrierCode,
    useInternationalFormat: t.international,
    withNationalPrefix: a,
    metadata: i
  });
  if (a || (t.nationalPrefix ? r = t.nationalPrefix + d(l) + r : t.complexPrefixBeforeNationalSignificantNumber && (r = t.complexPrefixBeforeNationalSignificantNumber + " " + r)), A4(r, t))
    return r;
}
function A4(t, l) {
  return Q(t) === l.getNationalDigits();
}
function C4(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function u1(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function F4(t, l, e) {
  return l && u1(t.prototype, l), e && u1(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var D4 = /* @__PURE__ */ function() {
  function t() {
    C4(this, t);
  }
  return F4(t, [{
    key: "parse",
    value: function(e) {
      if (this.context = [{
        or: !0,
        instructions: []
      }], this.parsePattern(e), this.context.length !== 1)
        throw new Error("Non-finalized contexts left when pattern parse ended");
      var i = this.context[0], a = i.branches, d = i.instructions;
      if (a)
        return {
          op: "|",
          args: a.concat([v3(d)])
        };
      if (d.length === 0)
        throw new Error("Pattern is required");
      return d.length === 1 ? d[0] : d;
    }
  }, {
    key: "startContext",
    value: function(e) {
      this.context.push(e);
    }
  }, {
    key: "endContext",
    value: function() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function(e) {
      if (!e)
        throw new Error("Pattern is required");
      var i = e.match(B4);
      if (!i) {
        if (L4.test(e))
          throw new Error("Illegal characters found in a pattern: ".concat(e));
        this.getContext().instructions = this.getContext().instructions.concat(e.split(""));
        return;
      }
      var a = i[1], d = e.slice(0, i.index), r = e.slice(i.index + a.length);
      switch (a) {
        case "(?:":
          d && this.parsePattern(d), this.startContext({
            or: !0,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or)
            throw new Error('")" operator must be preceded by "(?:" operator');
          if (d && this.parsePattern(d), this.getContext().instructions.length === 0)
            throw new Error('No instructions found after "|" operator in an "or" group');
          var n = this.getContext(), c = n.branches;
          c.push(v3(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
            op: "|",
            args: c
          });
          break;
        case "|":
          if (!this.getContext().or)
            throw new Error('"|" operator can only be used inside "or" groups');
          if (d && this.parsePattern(d), !this.getContext().branches)
            if (this.context.length === 1)
              this.getContext().branches = [];
            else
              throw new Error('"branches" not found in an "or" group context');
          this.getContext().branches.push(v3(this.getContext().instructions)), this.getContext().instructions = [];
          break;
        case "[":
          d && this.parsePattern(d), this.startContext({
            oneOfSet: !0
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet)
            throw new Error('"]" operator must be preceded by "[" operator');
          this.endContext(), this.getContext().instructions.push({
            op: "[]",
            args: N4(d)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(a));
      }
      r && this.parsePattern(r);
    }
  }]), t;
}();
function N4(t) {
  for (var l = [], e = 0; e < t.length; ) {
    if (t[e] === "-") {
      if (e === 0 || e === t.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(t));
      for (var i = t[e - 1].charCodeAt(0) + 1, a = t[e + 1].charCodeAt(0) - 1, d = i; d <= a; )
        l.push(String.fromCharCode(d)), d++;
    } else
      l.push(t[e]);
    e++;
  }
  return l;
}
var L4 = /[\(\)\[\]\?\:\|]/, B4 = new RegExp(
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function v3(t) {
  return t.length === 1 ? t[0] : t;
}
function g1(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = P4(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P4(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return $1(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return $1(t, l);
  }
}
function $1(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function E4(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function m1(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function I4(t, l, e) {
  return l && m1(t.prototype, l), e && m1(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var S4 = /* @__PURE__ */ function() {
  function t(l) {
    E4(this, t), this.matchTree = new D4().parse(l);
  }
  return I4(t, [{
    key: "match",
    value: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = i.allowOverflow;
      if (!e)
        throw new Error("String is required");
      var d = z3(e.split(""), this.matchTree, !0);
      if (d && d.match && delete d.matchedChars, !(d && d.overflow && !a))
        return d;
    }
  }]), t;
}();
function z3(t, l, e) {
  if (typeof l == "string") {
    var i = t.join("");
    return l.indexOf(i) === 0 ? t.length === l.length ? {
      match: !0,
      matchedChars: t
    } : {
      partialMatch: !0
    } : i.indexOf(l) === 0 ? e && t.length > l.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: t.slice(0, l.length)
    } : void 0;
  }
  if (Array.isArray(l)) {
    for (var a = t.slice(), d = 0; d < l.length; ) {
      var r = l[d], n = z3(a, r, e && d === l.length - 1);
      if (n) {
        if (n.overflow)
          return n;
        if (n.match) {
          if (a = a.slice(n.matchedChars.length), a.length === 0)
            return d === l.length - 1 ? {
              match: !0,
              matchedChars: t
            } : {
              partialMatch: !0
            };
        } else {
          if (n.partialMatch)
            return {
              partialMatch: !0
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(n, null, 2)));
        }
      } else
        return;
      d++;
    }
    return e ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: t.slice(0, t.length - a.length)
    };
  }
  switch (l.op) {
    case "|":
      for (var c, h = g1(l.args), s; !(s = h()).done; ) {
        var o = s.value, v = z3(t, o, e);
        if (v) {
          if (v.overflow)
            return v;
          if (v.match)
            return {
              match: !0,
              matchedChars: v.matchedChars
            };
          if (v.partialMatch)
            c = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(v, null, 2)));
        }
      }
      return c ? {
        partialMatch: !0
      } : void 0;
    case "[]":
      for (var M = g1(l.args), u; !(u = M()).done; ) {
        var $ = u.value;
        if (t[0] === $)
          return t.length === 1 ? {
            match: !0,
            matchedChars: t
          } : e ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [$]
          };
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(l));
  }
}
function p1(t, l) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e)
    return (e = e.call(t)).next.bind(e);
  if (Array.isArray(t) || (e = O4(t)) || l && t && typeof t.length == "number") {
    e && (t = e);
    var i = 0;
    return function() {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O4(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return w1(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return w1(t, l);
  }
}
function w1(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function T4(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function z1(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function V4(t, l, e) {
  return l && z1(t.prototype, l), e && z1(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var M3 = "9", R4 = 15, k4 = Y(M3, R4), _4 = /[- ]/, G4 = function() {
  return /\[([^\[\]])*\]/g;
}, j4 = function() {
  return /\d(?=[^,}][^,}])/g;
}, U4 = new RegExp("[" + F + "]*\\$1[" + F + "]*(\\$\\d[" + F + "]*)*$"), M1 = 3, W4 = /* @__PURE__ */ function() {
  function t(l) {
    l.state;
    var e = l.metadata;
    T4(this, t), this.metadata = e, this.resetFormat();
  }
  return V4(t, [{
    key: "resetFormat",
    value: function() {
      this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function(e, i) {
      this.resetFormat(), e ? (this.isNANP = e.callingCode() === "1", this.matchingFormats = e.formats(), i.nationalSignificantNumber && this.narrowDownMatchingFormats(i)) : (this.isNANP = void 0, this.matchingFormats = []);
    }
  }, {
    key: "format",
    value: function(e, i) {
      var a = this;
      if (y4(i.nationalSignificantNumber, this.metadata))
        for (var d = p1(this.matchingFormats), r; !(r = d()).done; ) {
          var n = r.value, c = H4(i, n, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function(s) {
              return a.shouldTryNationalPrefixFormattingRule(s, {
                international: i.international,
                nationalPrefix: i.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function(s) {
              return a.getSeparatorAfterNationalPrefix(s);
            }
          });
          if (c)
            return this.resetFormat(), this.chosenFormat = n, this.setNationalNumberTemplate(c.replace(/\d/g, C), i), this.populatedNationalNumberTemplate = c, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(C), c;
        }
      return this.formatNationalNumberWithNextDigits(e, i);
    }
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function(e, i) {
      var a = this.chosenFormat, d = this.chooseFormat(i);
      if (d)
        return d === a ? this.formatNextNationalNumberDigits(e) : this.formatNextNationalNumberDigits(i.getNationalDigits());
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function(e) {
      var i = this, a = e.nationalSignificantNumber, d = e.nationalPrefix, r = e.international, n = a, c = n.length - M1;
      c < 0 && (c = 0), this.matchingFormats = this.matchingFormats.filter(function(h) {
        return i.formatSuits(h, r, d) && i.formatMatches(h, n, c);
      }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
    }
  }, {
    key: "formatSuits",
    value: function(e, i, a) {
      return !(a && !e.usesNationalPrefix() && !e.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !i && !a && e.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
    }
  }, {
    key: "formatMatches",
    value: function(e, i, a) {
      var d = e.leadingDigitsPatterns().length;
      if (d === 0)
        return !0;
      a = Math.min(a, d - 1);
      var r = e.leadingDigitsPatterns()[a];
      if (i.length < M1)
        try {
          return new S4(r).match(i, {
            allowOverflow: !0
          }) !== void 0;
        } catch (n) {
          return console.error(n), !0;
        }
      return new RegExp("^(".concat(r, ")")).test(i);
    }
  }, {
    key: "getFormatFormat",
    value: function(e, i) {
      return i ? e.internationalFormat() : e.format();
    }
  }, {
    key: "chooseFormat",
    value: function(e) {
      for (var i = this, a = function() {
        var h = r.value;
        return i.chosenFormat === h ? "break" : U4.test(i.getFormatFormat(h, e.international)) ? i.createTemplateForFormat(h, e) ? (i.chosenFormat = h, "break") : (i.matchingFormats = i.matchingFormats.filter(function(s) {
          return s !== h;
        }), "continue") : "continue";
      }, d = p1(this.matchingFormats.slice()), r; !(r = d()).done; ) {
        var n = a();
        if (n === "break")
          break;
      }
      return this.chosenFormat || this.resetFormat(), this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function(e, i) {
      if (!(e.pattern().indexOf("|") >= 0)) {
        var a = this.getTemplateForFormat(e, i);
        if (a)
          return this.setNationalNumberTemplate(a, i), !0;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function(e) {
      return this.isNANP || e && e.nationalPrefixFormattingRule() && _4.test(e.nationalPrefixFormattingRule()) ? " " : "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function(e, i) {
      var a = e.IDDPrefix, d = e.missingPlus;
      return a ? i && i.spacing === !1 ? a : a + " " : d ? "" : "+";
    }
  }, {
    key: "getTemplate",
    value: function(e) {
      if (!!this.template) {
        for (var i = -1, a = 0, d = e.international ? this.getInternationalPrefixBeforeCountryCallingCode(e, {
          spacing: !1
        }) : ""; a < d.length + e.getDigitsWithoutInternationalPrefix().length; )
          i = this.template.indexOf(C, i + 1), a++;
        return v1(this.template, i + 1);
      }
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function(e, i) {
      this.nationalNumberTemplate = e, this.populatedNationalNumberTemplate = e, this.populatedNationalNumberTemplatePosition = -1, i.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(i).replace(/[\d\+]/g, C) + Y(C, i.callingCode.length) + " " + e : this.template = e;
    }
  }, {
    key: "getTemplateForFormat",
    value: function(e, i) {
      var a = i.nationalSignificantNumber, d = i.international, r = i.nationalPrefix, n = i.complexPrefixBeforeNationalSignificantNumber, c = e.pattern();
      c = c.replace(G4(), "\\d").replace(j4(), "\\d");
      var h = k4.match(c)[0];
      if (!(a.length > h.length)) {
        var s = new RegExp("^" + c + "$"), o = a.replace(/\d/g, M3);
        s.test(o) && (h = o);
        var v = this.getFormatFormat(e, d), M;
        if (this.shouldTryNationalPrefixFormattingRule(e, {
          international: d,
          nationalPrefix: r
        })) {
          var u = v.replace(V1, e.nationalPrefixFormattingRule());
          if (Q(e.nationalPrefixFormattingRule()) === (r || "") + Q("$1") && (v = u, M = !0, r))
            for (var $ = r.length; $ > 0; )
              v = v.replace(/\d/, C), $--;
        }
        var z = h.replace(new RegExp(c), v).replace(new RegExp(M3, "g"), C);
        return M || (n ? z = Y(C, n.length) + " " + z : r && (z = Y(C, r.length) + this.getSeparatorAfterNationalPrefix(e) + z)), d && (z = T1(z)), z;
      }
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function(e) {
      var i = x4(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, e);
      if (!i) {
        this.resetFormat();
        return;
      }
      return this.populatedNationalNumberTemplate = i[0], this.populatedNationalNumberTemplatePosition = i[1], v1(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function(e, i) {
      var a = i.international, d = i.nationalPrefix;
      if (e.nationalPrefixFormattingRule()) {
        var r = e.usesNationalPrefix();
        if (r && d || !r && !a)
          return !0;
      }
    }
  }]), t;
}();
function W1(t, l) {
  return X4(t) || K4(t, l) || Y4(t, l) || Z4();
}
function Z4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y4(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return x1(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return x1(t, l);
  }
}
function x1(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function K4(t, l) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var i = [], a = !0, d = !1, r, n;
    try {
      for (e = e.call(t); !(a = (r = e.next()).done) && (i.push(r.value), !(l && i.length === l)); a = !0)
        ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        !a && e.return != null && e.return();
      } finally {
        if (d)
          throw n;
      }
    }
    return i;
  }
}
function X4(t) {
  if (Array.isArray(t))
    return t;
}
function J4(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function H1(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function Q4(t, l, e) {
  return l && H1(t.prototype, l), e && H1(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var q4 = "[" + F + b + "]+", e5 = new RegExp("^" + q4 + "$", "i"), t5 = "(?:[" + e3 + "][" + F + b + "]*|[" + F + b + "]+)", l5 = new RegExp("[^" + F + b + "]+.*$"), i5 = /[^\d\[\]]/, a5 = /* @__PURE__ */ function() {
  function t(l) {
    var e = l.defaultCountry, i = l.defaultCallingCode, a = l.metadata, d = l.onNationalSignificantNumberChange;
    J4(this, t), this.defaultCountry = e, this.defaultCallingCode = i, this.metadata = a, this.onNationalSignificantNumberChange = d;
  }
  return Q4(t, [{
    key: "input",
    value: function(e, i) {
      var a = n5(e), d = W1(a, 2), r = d[0], n = d[1], c = Q(r), h;
      return n && (i.digits || (i.startInternationalNumber(), c || (h = !0))), c && this.inputDigits(c, i), {
        digits: c,
        justLeadingPlus: h
      };
    }
  }, {
    key: "inputDigits",
    value: function(e, i) {
      var a = i.digits, d = a.length < 3 && a.length + e.length >= 3;
      if (i.appendDigits(e), d && this.extractIddPrefix(i), this.isWaitingForCountryCallingCode(i)) {
        if (!this.extractCountryCallingCode(i))
          return;
      } else
        i.appendNationalSignificantNumberDigits(e);
      i.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(i.getNationalDigits(), function(r) {
        return i.update(r);
      });
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function(e) {
      var i = e.international, a = e.callingCode;
      return i && !a;
    }
  }, {
    key: "extractCountryCallingCode",
    value: function(e) {
      var i = j1("+" + e.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), a = i.countryCallingCode, d = i.number;
      if (a)
        return e.setCallingCode(a), e.update({
          nationalSignificantNumber: d
        }), !0;
    }
  }, {
    key: "reset",
    value: function(e) {
      if (e) {
        this.hasSelectedNumberingPlan = !0;
        var i = e._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = i && i5.test(i);
      } else
        this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
    }
  }, {
    key: "extractNationalSignificantNumber",
    value: function(e, i) {
      if (!!this.hasSelectedNumberingPlan) {
        var a = m3(e, this.metadata), d = a.nationalPrefix, r = a.nationalNumber, n = a.carrierCode;
        if (r !== e)
          return this.onExtractedNationalNumber(d, n, r, e, i), !0;
      }
    }
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function(e, i, a) {
      if (!this.hasExtractedNationalSignificantNumber)
        return this.extractNationalSignificantNumber(e, a);
      if (!!this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        var d = m3(e, this.metadata), r = d.nationalPrefix, n = d.nationalNumber, c = d.carrierCode;
        if (n !== i)
          return this.onExtractedNationalNumber(r, c, n, e, a), !0;
      }
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function(e, i, a, d, r) {
      var n, c, h = d.lastIndexOf(a);
      if (h >= 0 && h === d.length - a.length) {
        c = !0;
        var s = d.slice(0, h);
        s !== e && (n = s);
      }
      r({
        nationalPrefix: e,
        carrierCode: i,
        nationalSignificantNumber: a,
        nationalSignificantNumberMatchesInput: c,
        complexPrefixBeforeNationalSignificantNumber: n
      }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function(e) {
      if (this.extractAnotherNationalSignificantNumber(e.getNationalDigits(), e.nationalSignificantNumber, function(i) {
        return e.update(i);
      }))
        return !0;
      if (this.extractIddPrefix(e))
        return this.extractCallingCodeAndNationalSignificantNumber(e), !0;
      if (this.fixMissingPlus(e))
        return this.extractCallingCodeAndNationalSignificantNumber(e), !0;
    }
  }, {
    key: "extractIddPrefix",
    value: function(e) {
      var i = e.international, a = e.IDDPrefix, d = e.digits;
      if (e.nationalSignificantNumber, !(i || a)) {
        var r = _1(d, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
        if (r !== void 0 && r !== d)
          return e.update({
            IDDPrefix: d.slice(0, d.length - r.length)
          }), this.startInternationalNumber(e, {
            country: void 0,
            callingCode: void 0
          }), !0;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function(e) {
      if (!e.international) {
        var i = G1(e.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), a = i.countryCallingCode;
        if (i.number, a)
          return e.update({
            missingPlus: !0
          }), this.startInternationalNumber(e, {
            country: e.country,
            callingCode: a
          }), !0;
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function(e, i) {
      var a = i.country, d = i.callingCode;
      e.startInternationalNumber(a, d), e.nationalSignificantNumber && (e.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function(e) {
      this.extractCountryCallingCode(e) && this.extractNationalSignificantNumber(e.getNationalDigits(), function(i) {
        return e.update(i);
      });
    }
  }]), t;
}();
function d5(t) {
  var l = t.search(t5);
  if (!(l < 0)) {
    t = t.slice(l);
    var e;
    return t[0] === "+" && (e = !0, t = t.slice(1)), t = t.replace(l5, ""), e && (t = "+" + t), t;
  }
}
function r5(t) {
  var l = d5(t) || "";
  return l[0] === "+" ? [l.slice(1), !0] : [l];
}
function n5(t) {
  var l = r5(t), e = W1(l, 2), i = e[0], a = e[1];
  return e5.test(i) || (i = ""), [i, a];
}
function x3(t) {
  return x3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, x3(t);
}
function c5(t, l) {
  return v5(t) || o5(t, l) || s5(t, l) || h5();
}
function h5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s5(t, l) {
  if (!!t) {
    if (typeof t == "string")
      return y1(t, l);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return y1(t, l);
  }
}
function y1(t, l) {
  (l == null || l > t.length) && (l = t.length);
  for (var e = 0, i = new Array(l); e < l; e++)
    i[e] = t[e];
  return i;
}
function o5(t, l) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var i = [], a = !0, d = !1, r, n;
    try {
      for (e = e.call(t); !(a = (r = e.next()).done) && (i.push(r.value), !(l && i.length === l)); a = !0)
        ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        !a && e.return != null && e.return();
      } finally {
        if (d)
          throw n;
      }
    }
    return i;
  }
}
function v5(t) {
  if (Array.isArray(t))
    return t;
}
function f5(t, l) {
  if (!(t instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function b1(t, l) {
  for (var e = 0; e < l.length; e++) {
    var i = l[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function u5(t, l, e) {
  return l && b1(t.prototype, l), e && b1(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var Z1 = /* @__PURE__ */ function() {
  function t(l, e) {
    f5(this, t), this.metadata = new H(e);
    var i = this.getCountryAndCallingCode(l), a = c5(i, 2), d = a[0], r = a[1];
    this.defaultCountry = d, this.defaultCallingCode = r, this.reset();
  }
  return u5(t, [{
    key: "getCountryAndCallingCode",
    value: function(e) {
      var i, a;
      return e && (x3(e) === "object" ? (i = e.defaultCountry, a = e.defaultCallingCode) : i = e), i && !this.metadata.hasCountry(i) && (i = void 0), [i, a];
    }
  }, {
    key: "input",
    value: function(e) {
      var i = this.parser.input(e, this.state), a = i.digits, d = i.justLeadingPlus;
      if (d)
        this.formattedOutput = "+";
      else if (a) {
        this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
        var r;
        if (this.metadata.hasSelectedNumberingPlan() && (r = this.formatter.format(a, this.state)), r === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
          this.determineTheCountryIfNeeded();
          var n = this.state.getNationalDigits();
          n && (r = this.formatter.format(n, this.state));
        }
        this.formattedOutput = r ? this.getFullNumber(r) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function() {
      var e = this;
      return this.state = new p4({
        onCountryChange: function(a) {
          e.country = a;
        },
        onCallingCodeChange: function(a, d) {
          e.metadata.selectNumberingPlan(d, a), e.formatter.reset(e.metadata.numberingPlan, e.state), e.parser.reset(e.metadata.numberingPlan);
        }
      }), this.formatter = new W4({
        state: this.state,
        metadata: this.metadata
      }), this.parser = new a5({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function() {
          e.determineTheCountryIfNeeded(), e.formatter.reset(e.metadata.numberingPlan, e.state);
        }
      }), this.state.reset(this.defaultCountry, this.defaultCallingCode), this.formattedOutput = "", this;
    }
  }, {
    key: "isInternational",
    value: function() {
      return this.state.international;
    }
  }, {
    key: "getCallingCode",
    value: function() {
      if (this.isInternational())
        return this.state.callingCode;
    }
  }, {
    key: "getCountryCallingCode",
    value: function() {
      return this.getCallingCode();
    }
  }, {
    key: "getCountry",
    value: function() {
      var e = this.state.digits;
      if (e)
        return this._getCountry();
    }
  }, {
    key: "_getCountry",
    value: function() {
      var e = this.state.country;
      return e;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function() {
      (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry();
    }
  }, {
    key: "getFullNumber",
    value: function(e) {
      var i = this;
      if (this.isInternational()) {
        var a = function(n) {
          return i.formatter.getInternationalPrefixBeforeCountryCallingCode(i.state, {
            spacing: !!n
          }) + n;
        }, d = this.state.callingCode;
        return a(d ? e ? "".concat(d, " ").concat(e) : d : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
      }
      return e;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function() {
      var e = this.state, i = e.nationalSignificantNumber, a = e.complexPrefixBeforeNationalSignificantNumber, d = e.nationalPrefix, r = i, n = a || d;
      return n && (r = n + r), r;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function() {
      var e = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(e ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function() {
      var e = this.getNonFormattedNumber();
      if (e)
        return e.replace(/[\+\d]/g, C);
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function() {
      var e = this.state.callingCode, i = this.metadata.getCountryCodesForCallingCode(e);
      return i && i.length > 1;
    }
  }, {
    key: "determineTheCountry",
    value: function() {
      this.state.setCountry(U1(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata));
    }
  }, {
    key: "getNumberValue",
    value: function() {
      var e = this.state, i = e.digits, a = e.callingCode, d = e.country, r = e.nationalSignificantNumber;
      if (!!i) {
        if (this.isInternational())
          return a ? "+" + a + r : "+" + i;
        if (d || a) {
          var n = d ? this.metadata.countryCallingCode() : a;
          return "+" + n + r;
        }
      }
    }
  }, {
    key: "getNumber",
    value: function() {
      var e = this.state, i = e.nationalSignificantNumber, a = e.carrierCode, d = e.callingCode, r = this._getCountry();
      if (!!i && !(!r && !d)) {
        var n = new k1(r || d, i, this.metadata.metadata);
        return a && (n.carrierCode = a), n;
      }
    }
  }, {
    key: "isPossible",
    value: function() {
      var e = this.getNumber();
      return e ? e.isPossible() : !1;
    }
  }, {
    key: "isValid",
    value: function() {
      var e = this.getNumber();
      return e ? e.isValid() : !1;
    }
  }, {
    key: "getNationalNumber",
    value: function() {
      return this.state.nationalSignificantNumber;
    }
  }, {
    key: "getChars",
    value: function() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
  }, {
    key: "getTemplate",
    value: function() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]), t;
}();
function N5() {
  return D2(g4, arguments);
}
function O(t) {
  return Z1.call(this, t, b3);
}
O.prototype = Object.create(Z1.prototype, {});
O.prototype.constructor = O;
function f3(t) {
  const { defaultCountry: l, initialValue: e, disableFormatting: i, splitCallingCode: a } = t, d = l && !a ? `+${W[l]?.[0]}` : "", r = new O(l);
  let n = r.input(e);
  const c = r.getNumberValue();
  i && c && (n = c);
  const h = r.getCallingCode();
  return a && h && (n = n.replace(`+${h}`, "").trim()), {
    inputValue: n || d,
    isoCode: r.getCountry() || l || null
  };
}
function g5(t, l) {
  const { excludedCountries: e, onlyCountries: i, continents: a } = l;
  return !(L(e, !0) && e.includes(t) || L(i) && !i.includes(t) || L(a) && !x2(a, t));
}
function $5({
  value: t,
  onChange: l,
  defaultCountry: e,
  forceCallingCode: i,
  splitCallingCode: a,
  onlyCountries: d,
  excludedCountries: r,
  continents: n,
  disableFormatting: c
}) {
  const h = g.useRef(
    e || null
  ), s = g.useRef(new O(e)), o = g.useRef(null), [v, M] = g.useState(e), [u, $] = g.useState(() => f3({
    initialValue: t,
    defaultCountry: e,
    disableFormatting: c,
    splitCallingCode: a
  })), [z, y] = g.useState(t), A = (f) => ({
    countryCallingCode: s.current.getCallingCode() || null,
    countryCode: s.current.getCountry() || null,
    nationalNumber: s.current.getNationalNumber(),
    numberValue: s.current.getNumberValue() || null,
    reason: f
  }), a3 = (f) => f && g5(f, {
    onlyCountries: d,
    excludedCountries: r,
    continents: n
  }), T = (f) => (s.current.reset(), s.current.input(f)), d3 = (f) => {
    let p = f.target.value;
    a ? p = `+${k(
      u.isoCode || e
    )}${p.replaceAll("+", "")}` : p = p.startsWith("+") || p === "" ? p : `+${p}`;
    const x = T(p), P = p === "+" || !p ? null : s.current.getCountry() || h.current || null;
    a || (h.current = P);
    const V = s.current.getNumber() || null, D = s.current.getNumberValue() || "";
    if (a) {
      const N = (c ? D : x).replace(
        `+${k(
          u.isoCode || e
        )}`,
        ""
      ).trim();
      l?.(N, A("input")), y(N), $({
        isoCode: h.current,
        inputValue: N
      });
    } else if (i && !V && (u.isoCode || e)) {
      const N = `+${k(
        u.isoCode || e
      )}`;
      l?.(N, A("input")), y(N), $({
        isoCode: u.isoCode || e || null,
        inputValue: N
      });
    } else
      D && (!P || !a3(P)) ? (l?.(D, {
        ...A("input"),
        countryCode: null,
        countryCallingCode: null,
        nationalNumber: null
      }), y(D), $({
        isoCode: null,
        inputValue: D
      })) : c ? (l?.(D, A("input")), y(D), $({
        isoCode: P || null,
        inputValue: D
      })) : (l?.(x, A("input")), y(x), $({
        isoCode: P || null,
        inputValue: x
      }));
  };
  g.useEffect(() => {
    if (t !== z) {
      y(t);
      const f = f3({
        initialValue: t,
        defaultCountry: e,
        splitCallingCode: a
      });
      a ? f.isoCode = h.current : h.current = f.isoCode, $(f);
    }
  }, [t, z, e, a]), g.useEffect(() => {
    if (e !== v) {
      M(e), s.current = new O(e);
      const { inputValue: f, isoCode: p } = f3({
        initialValue: "",
        defaultCountry: e,
        splitCallingCode: a
      });
      y(f), s.current.input(f), h.current = s.current.getCountry() || null, l?.(f, A("country")), $({
        inputValue: f,
        isoCode: p
      });
    }
  }, [e, v, a, l]);
  const r3 = (f) => {
    if (f === u.isoCode)
      return;
    const p = W[f]?.[0];
    let x = `+${p}${u.inputValue.replace(
      `+${k(
        u.isoCode || e
      )}`,
      ""
    )}`;
    c || (x = T(x)), a && (x = x.replace(`+${p}`, "").trim()), l?.(x, {
      ...A("country"),
      countryCode: f
    }), h.current = f, y(x), $({
      isoCode: f,
      inputValue: x
    });
  };
  return {
    inputValue: u.inputValue,
    isoCode: u.isoCode,
    onInputChange: d3,
    onCountryChange: r3,
    inputRef: o
  };
}
const m5 = g.forwardRef((t, l) => {
  const {
    forceCallingCode: e,
    splitCallingCode: i,
    onlyCountries: a,
    excludedCountries: d,
    defaultCountry: r,
    onDoubleClick: n,
    onFocus: c,
    onCopy: h,
    value: s,
    inputProps: o,
    InputProps: v,
    inputRef: M,
    disabled: u,
    onChange: $,
    disableDropdown: z,
    disableFormatting: y,
    focusOnSelectCountry: A,
    langOfCountryName: a3,
    continents: T,
    preferredCountries: d3,
    MenuProps: r3,
    className: f,
    ...p
  } = t, x = g.useRef(null), [P, V] = g.useState(null);
  F2(t);
  const {
    onInputChange: D,
    onCountryChange: N,
    inputRef: I,
    isoCode: D3,
    inputValue: Y1
  } = $5({
    defaultCountry: r,
    value: s ?? "",
    onChange: $,
    forceCallingCode: e,
    splitCallingCode: i,
    excludedCountries: d,
    onlyCountries: a,
    disableFormatting: y,
    continents: T
  }), K1 = (m) => {
    m.preventDefault(), (!u || !z) && V(x.current);
  }, X1 = () => {
    I.current && I.current.focus();
  }, J1 = (m) => {
    V(null), N(m), A && X1();
  }, Q1 = (m) => {
    queueMicrotask(() => {
      I.current && C2(I.current);
    }), c?.(m);
  }, q1 = (m) => {
    const R = I.current;
    R.setSelectionRange(0, R.value.length), n?.(m);
  }, e2 = (m) => {
    if (h) {
      h(m);
      return;
    }
    const R = window.getSelection();
    if (R) {
      const a2 = R.toString().replaceAll(" ", "");
      m.clipboardData.setData("text/plain", a2), m.preventDefault();
    }
  }, t2 = (m) => {
    I.current = m, v?.inputRef && n3(m, v.inputRef), M && n3(m, M);
  }, l2 = (m) => {
    x.current = m, l && n3(m, l);
  }, i2 = () => {
    V(null);
  };
  return /* @__PURE__ */ G(H3, {
    children: [/* @__PURE__ */ w(v2, {
      type: "tel",
      disabled: u,
      value: Y1,
      ref: l2,
      onDoubleClick: q1,
      inputRef: t2,
      className: `MuiTelInput-TextField ${f || ""}`,
      onChange: D,
      inputProps: {
        onCopy: e2,
        ...o
      },
      onFocus: Q1,
      InputProps: {
        ...v,
        startAdornment: /* @__PURE__ */ w(o2, {
          position: "start",
          children: /* @__PURE__ */ w(A1, {
            isFlagsMenuOpened: Boolean(P),
            isoCode: D3,
            onClick: K1,
            disabled: u,
            disableDropdown: Boolean(z),
            splitCallingCode: i
          })
        })
      },
      ...p
    }), z ? null : /* @__PURE__ */ w(F1, {
      onlyCountries: a,
      excludedCountries: d,
      continents: T,
      anchorEl: P,
      isoCode: D3,
      preferredCountries: d3,
      onClose: i2,
      langOfCountryName: a3,
      onSelectCountry: J1,
      ...r3
    })]
  });
});
m5.defaultProps = {
  value: ""
};
export {
  O as AsYouType,
  m5 as MuiTelInput,
  N5 as matchIsValidTel
};
