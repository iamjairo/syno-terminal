// Namespace definition
Ext.ns("IamJairo.Terminal");

// Application definition
Ext.define("IamJairo.Terminal.AppInstance", {
    extend: "SYNO.SDS.AppInstance",
    appWindowName: "IamJairo.Terminal.AppWindow",
    defaultWinSize: { width: 1160, height: 620 },
    constructor: function () {
        this.callParent(arguments);
    },
});

Ext.define("IamJairo.Terminal.AppWindow", {
    extend: "SYNO.SDS.AppWindow",
    layout: 'fit',
    width: '100%',
    height: '100%',
    initComponent: function () {
        const path = window.location.pathname.replace(/[/]+$/, '');
        this.items = [
            {
                xtype: 'panel',
                border: false,
                html: '<iframe src="/terminal" style="width:100%;height:100%;border:none;"></iframe>'

            }
        ];
        this.callParent(arguments);
    },
    defaultWinSize: { width: 1160, height: 620 },
    constructor: function (config) {
        const t = this;
        t.callParent([t.fillConfig(config)]);
    },
    fillConfig: function (e) {
        const i = {
            // cls: 'syno-app-iscsi',
        };
        return Ext.apply(i, e), i;
    },
    onDestroy: function (e) {
        IamJairo.Terminal.AppWindow.superclass.onDestroy.call(this);
    },
    onOpen: function (a) {
        IamJairo.Terminal.AppWindow.superclass.onOpen.call(
            this,
            a
        );
    },
});
