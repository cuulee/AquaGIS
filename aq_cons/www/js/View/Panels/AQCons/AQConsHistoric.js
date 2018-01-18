'use strict';

App.View.Panels.Aq_cons.Historic = App.View.Panels.Splitted.extend({
  _mapInstance: null,

  initialize: function (options) {
    options = _.defaults(options, {
      dateView: true,
      id_category: 'aq_cons',
      spatialFilter: false,
      master: false,
      title: __('Histórico de previsiones'),
      id_panel: 'historic',
      filteView: false,
    });
    App.View.Panels.Splitted.prototype.initialize.call(this, options);
    this.render();
  },

  customRender: function() {
    this._widgets = [];
    // this._widgets.push(new App.View.Widgets.Aq_cons.ConsumptionForecastByLandUseTimeserie({
    //   id_scope: this.scopeModel.get('id')
    // }));

    this._widgets.push(new App.View.Widgets.Aq_cons.TotalConsumeWeeklyAverages({
      id_scope: this.scopeModel.get('id'),
      dimension: 'allWidth',
    }));

    this.subviews.push(new App.View.Widgets.Container({
      widgets: this._widgets,
      el: this.$('.bottom .widgetContainer')
    }));
  },

  onAttachToDOM: function() {
    this._mapView = new App.View.Panels.Aq_cons.CurrentMap({
      el: this.$('.top'),
      scope: this.scopeModel.get('id')
    }).render();

    this.subviews.push(this._mapView);
  }
});
