import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISIvayyvaДомLForm from './forms/i-i-s-ivayyva-дом-l';
import IISIvayyvaКлассLForm from './forms/i-i-s-ivayyva-класс-l';
import IISIvayyvaДомEForm from './forms/i-i-s-ivayyva-дом-e';
import IISIvayyvaКлассEForm from './forms/i-i-s-ivayyva-класс-e';
import IISIvayyvaДомModel from './models/i-i-s-ivayyva-дом';
import IISIvayyvaКлассModel from './models/i-i-s-ivayyva-класс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ivayyva-дом': IISIvayyvaДомModel,
    'i-i-s-ivayyva-класс': IISIvayyvaКлассModel
  },

  'application-name': 'Ivayyva',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Ivayyva',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ivayyva',
          title: 'Ivayyva'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        ivayyva: {
          caption: 'Ivayyva',
          title: 'Ivayyva',
          'i-i-s-ivayyva-дом-l': {
            caption: 'Дом',
            title: ''
          },
          'i-i-s-ivayyva-класс-l': {
            caption: 'Класс',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-ivayyva-дом-l': IISIvayyvaДомLForm,
    'i-i-s-ivayyva-класс-l': IISIvayyvaКлассLForm,
    'i-i-s-ivayyva-дом-e': IISIvayyvaДомEForm,
    'i-i-s-ivayyva-класс-e': IISIvayyvaКлассEForm
  },

});

export default translations;
