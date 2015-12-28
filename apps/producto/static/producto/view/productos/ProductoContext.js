Ext.define('GRUPOEJ.producto.view.productos.ProductoContext', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.treeValeContext',
    xtype: 'treeProductoContext',
    items: [
        {
            xtype: 'menuitem',
            action: 'add',
            bind: {
                text: 'Agregar Foto al "<b>{descripcion}</b>"'
            },
            iconCls: 'icono-agregar'
        },
        // {
        //     xtype: 'menuitem',
        //     // action: 'edit',
        //     bind: {
        //         text: 'Imprimir',
        //         visible: '{!esraiz}'
        //     },
        //     // iconCls: 'icono-editar'
        // },
    ],
});