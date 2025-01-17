'use strict';

angular.module('esn.calendar.libs', [
  'angularMoment',
  'esn.aggregator',
  'esn.authentication',
  'esn.avatar',
  'esn.cache',
  'esn.calMoment',
  'esn.configuration',
  'esn.core',
  'esn.form.helper',
  'esn.header',
  'esn.highlight',
  'esn.i18n',
  'esn.ical',
  'esn.media.query',
  'esn.module-registry',
  'esn.notification',
  'esn.provider',
  'esn.router',
  'esn.search',
  'esn.session',
  'esn.settings-overlay',
  'esn.clipboard',
  'esn.user-configuration',
  'esn.widget.helper',
  'linagora.esn.graceperiod',
  'materialAdmin',
  'mgcrea.ngStrap.aside',
  'mgcrea.ngStrap.datepicker',
  'mgcrea.ngStrap.modal',
  'naturalSort',
  'ng.deviceDetector',
  'ngPromiseExtras',
  'ngTouch',
  'op.dynamicDirective',
  'pascalprecht.translate',
  'restangular',
  'material.components.tooltip',
  'material.components.radioButton',
  'uuid4',
  'esn.onscroll',
  'esn.datetime',
  'esn.localstorage',
  'esn.scroll',
  'ngTagsInput',
  'esn.member',
  'mp.autoFocus',
  'linagora.esn.videoconference'
]);

require('esn-frontend-common-libs/src/frontend/js/modules/esn.router.js');
require('esn-frontend-common-libs/src/frontend/js/modules/notification.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user/user.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/media-query.js');
require('esn-frontend-common-libs/src/frontend/js/modules/highlight.js');
require('esn-frontend-common-libs/src/frontend/js/modules/i18n/i18n.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/scroll.js');
require('esn-frontend-common-libs/src/frontend/js/modules/core.js');
require('esn-frontend-common-libs/src/frontend/js/modules/datetime/datetime.module.js');
require('esn-frontend-common-libs/src/frontend/components/openpaas-logo/openpaas-logo.js');
require('esn-frontend-common-libs/src/modules/linagora.esn.graceperiod/frontend/js/app.js');
require('esn-frontend-common-libs/src/frontend/js/modules/avatar.js');
require('esn-frontend-common-libs/src/frontend/js/modules/application-menu.js');
require('esn-frontend-common-libs/src/frontend/js/modules/form-helper/form-helper.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/search/search.module.js');
require('esn-frontend-common-libs/src/frontend/js/constants.js');
require('esn-frontend-common-libs/src/frontend/js/modules/search/search.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/cache.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user/user.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/member.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user-configuration/user-configuration.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/attendee/attendee.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session');
require('esn-frontend-common-libs/src/frontend/js/modules/http.js');
require('esn-frontend-common-libs/src/frontend/js/modules/localstorage.js');
require('esn-frontend-common-libs/src/frontend/js/modules/datetime/datetime.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/media-query.js');
require('esn-frontend-common-libs/src/frontend/js/modules/escape-html.js');
require('esn-frontend-common-libs/src/frontend/js/modules/websocket.js');
require('esn-frontend-common-libs/src/frontend/js/modules/touchscreen-detector.js');
require('esn-frontend-common-libs/src/frontend/js/modules/async-action.js');
require('esn-frontend-common-libs/src/frontend/js/modules/module-registry/module-registry.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/settings-overlay.js');
require('esn-frontend-common-libs/src/frontend/js/modules/clipboard/clipboard.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/widget-helper.js');
require('esn-frontend-common-libs/src/frontend/js/modules/onscroll/on-scroll.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/localstorage.js');
require('esn-frontend-common-libs/src/frontend/js/modules/scroll.js');
require('esn-frontend-videoconference-calendar/src/linagora.esn.videoconference/app/videoconference.module.js');

require('../../esn.resource.libs/app/app.module.js');

require('./app.constants.js');
require('./services/attendee.service.js');
require('./services/attendees-cache.service.js');
require('./services/attendees-denormalizer.service.js');
require('./services/cached-event-source.js');
require('./services/cal-default-value.service.js');
require('./services/cal-ui-authorization-service.js');
require('./services/caldav-url.service.js');
require('./services/calendar-api.js');
require('./services/calendar-attendee-service.js');
require('./services/calendar-business-hours.service.js');
require('./services/calendar-cache.js');
require('./services/calendar-configuration.service.js');
require('./services/calendar-current-view.js');
require('./services/calendar-event-emitter.js');
require('./services/calendar-event-source-builder.js');
require('./services/calendar-event-source.js');
require('./services/calendar-explored-period-service.js');
require('./services/calendar-home-service.js');
require('./services/calendar-resource-restangular.js');
require('./services/calendar-resource.service.js');
require('./services/calendar-restangular.js');
require('./services/calendar-right-comparator.js');
require('./services/calendar-rights-utils.js');
require('./services/calendar-service.js');
require('./services/calendar-subscription-api.service.js');
require('./services/calendar-users-cache.js');
require('./services/calendar-utils.js');
require('./services/calendar-visibility-service.js');
require('./services/dav-request.js');
require('./services/delegation-edition-helper.js');
require('./services/event-api.js');
require('./services/event-service.js');
require('./services/event-store.js');
require('./services/event-utils.js');
require('./services/fc-moment.js');
require('./services/fullcalendar/calendar-configuration.service.js');
require('./services/fullcalendar/planning-render-event.service.js');
require('./services/fullcalendar/render-event.service.js');
require('./services/grace-period-response-handler.js');
require('./services/http-response-handler.js');
require('./services/ical.js');
require('./services/master-event-cache.js');
require('./services/partstat-jwt.service.js');
require('./services/partstat-update-notification.service.js');
require('./services/path-builder.js');
require('./services/path-parser.service.js');
require('./services/shells/calendar-collection-shell.js');
require('./services/shells/calendar-right-shell.js');
require('./services/shells/calendar-shell.js');
require('./services/shells/rrule-shell.js');
require('./services/shells/valarm-shell.js');
require('./services/shells/vfreebusy-shell.js');
require('./services/timezone.js');
require('./services/user-and-external-calendars.service.js');
require('./services/sidebar-visibility.service.js');
require('./services/event-duplicate.service.js');
require('./services/moment-date.service.js');
require('./services/event-preview-popover.service.js');
require('./core/date-to-moment.directive.js');
require('./core/auto-size-and-update.directive.js');
require('./components/freebusy/confirmation-modal/event-freebusy-confirmation-modal.service.js');
require('./components/freebusy/event-freebusy-hooks.service.js');
require('./components/freebusy/freebusy-api.service.js');
require('./components/freebusy/freebusy.constants.js');
require('./components/freebusy/freebusy.service.js');
require('./components/freebusy/icon/event-freebusy-icon.component.js');
require('./components/freebusy/icon/event-freebusy-icon.controller.js');
require('./components/event/form/event-form.service.js');
require('./components/event/form/open/open-event-form.service.js');
require('./components/event/form/open/open-event-from-search-form.service.js');
require('./components/event/form/open/open-event-form-on-click.component.js');
require('./components/event/form/event-form.controller.js');
require('./components/event/form/event-form.directive.js');
require('./components/event-date-suggestion/event-date-suggestion.component.js');
require('./components/event-date-suggestion/event-date-suggestion.controller.js');
require('./components/event-date-suggestion/modal/event-date-suggestion-modal.service.js');
require('./components/event-date-suggestion/summary/event-date-suggestion-summary.component.js');
require('./components/partstat-buttons/partstat-buttons.component.js');
require('./components/partstat-buttons/partstat-buttons.controller.js');
require('./components/select-calendar/select-calendar-item.component.js');
require('./components/select-calendar/select-calendar-item.controller.js');
require('./components/event-date-edition/event-date-edition.component.js');
require('./components/event-date-edition/event-date-edition.controller.js');
require('./components/entities-autocomplete-input/entities-autocomplete-input.component.js');
require('./components/entities-autocomplete-input/entities-autocomplete-input.controller.js');
require('./components/resource/resource-item/resource-item.component.js');
require('./components/resource/resource-item/resource-item.controller.js');
require('./components/resource/resource-list/resource-list.component.js');
require('./components/resource/resource-list/resource-list.controller.js');
require('./components/attendee/attendee-item/attendee-item.component.js');
require('./components/attendee/attendee-item/attendee-item.controller.js');
require('./components/attendee/attendee-item-consult/attendee-item-consult.component.js');
require('./components/attendee/attendee-item-consult/attendee-item-consult.controller.js');
require('./components/attendee/list/attendee-list.component.js');
require('./components/attendee/list/attendee-list.controller.js');
require('./components/attendee-tabs/attendee-tabs.component.js');
require('./components/mail-to-attendees/mail-to-attendees.component.js');
require('./components/mail-to-attendees/mail-to-attendees.controller.js');
require('./components/avatar/attendee-avatar/attendee-avatar.component.js');
require('./components/avatar/attendee-avatar/attendee-avatar.controller.js');
require('./components/avatar/attendee-avatar/external/attendee-avatar-external.component.js');
require('./components/avatar/attendee-avatar/external/attendee-avatar-external.controller.js');
require('./components/avatar/resource-avatar/resource-avatar.component.js');
require('./components/avatar/resource-avatar/resource-avatar.controller.js');
require('./components/partstat/icon/partstat-icon.component.js');
require('./components/partstat/icon/partstat-icon.controller.js');
require('./components/event-recurrence-edition/event-recurrence-edition.js');
require('./components/event-alarm-edition/event-alarm-edition.component.js');
require('./components/event-alarm-edition/event-alarm-edition.controller.js');
require('./components/time-select/time-select.component');
require('./components/time-select/time-select.controller');
require('./components/time-select/time-select-scroll.directive');
require('./components/time-select/time-select-menu-close.directive');
require('./components/event-preview-popover/event-preview-popover.component');
require('./app.run.js');
require('./app.config.js');
