'use strict';

angular.module('app', ['app.core', 'app.widgets', 'app.accounts']);
'use strict';

// cross-application modules aggregated here
angular.module('app.core', ['ngRoute']);
'use strict';

// feature module
angular.module('app.accounts', []);
'use strict';

//application-specific components in this module
angular.module('app.widgets', []);