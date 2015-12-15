Ext.define('GRUPOEJ.vale.view.vales.ValeContext', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.treeValeContext',
    xtype: 'treeValeContext',
    items: [
        {
            xtype: 'menuitem',
            action: 'add',
            bind: {
                text: 'Agregar Detalle del Pedido Nro "<b>{numero}</b>"'
            },
            iconCls: 'icono-agregar'
        },
        {
            xtype: 'menuitem',
            // action: 'edit',
            bind: {
                text: 'Imprimir',
                visible: '{!esraiz}'
            },
            // iconCls: 'icono-editar'
        },
    ],
});