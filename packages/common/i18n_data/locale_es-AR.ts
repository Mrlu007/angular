/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

import {Plural} from '@angular/common';

export default [
  'es-AR',
  [
    ['a. m.', 'p. m.'],
    ,
  ],
  ,
  [
    ['D', 'L', 'M', 'M', 'J', 'V', 'S'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
    ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']
  ],
  ,
  [
    ['e', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
    [
      'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'
    ],
    [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
      'octubre', 'noviembre', 'diciembre'
    ]
  ],
  [
    ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    [
      'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'
    ],
    [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
      'octubre', 'noviembre', 'diciembre'
    ]
  ],
  [['a. C.', 'd. C.'], , ['antes de Cristo', 'después de Cristo']], 0, [6, 0],
  ['d/M/yy', 'd MMM y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  [
    '{1} {0}',
    ,
    '{1}, {0}',
  ],
  [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0 %', '¤ #,##0.00', '#E0'], '$', 'peso argentino', function(n: number):
                                                                            Plural {
                                                                              if (n === 1)
                                                                                return Plural.One;
                                                                              return Plural.Other;
                                                                            }
];
