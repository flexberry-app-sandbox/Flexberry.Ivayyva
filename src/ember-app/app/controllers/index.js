import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ivayyva.caption'),
          title: i18n.t('forms.application.sitemap.ivayyva.title'),
          children: [{
            link: 'i-i-s-ivayyva-дом-l',
            caption: i18n.t('forms.application.sitemap.ivayyva.i-i-s-ivayyva-дом-l.caption'),
            title: i18n.t('forms.application.sitemap.ivayyva.i-i-s-ivayyva-дом-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-ivayyva-класс-l',
            caption: i18n.t('forms.application.sitemap.ivayyva.i-i-s-ivayyva-класс-l.caption'),
            title: i18n.t('forms.application.sitemap.ivayyva.i-i-s-ivayyva-класс-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})