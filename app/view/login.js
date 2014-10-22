Ext.define('Perpus.view.login',{
	extend: 'Ext.window.Window',
	alias:'widget.login',
	id	: 'login',
	autoShow: true,
	height: 130,
	width: 360,
	modal: true,
	title: 'Login Form',
	layout: {
		type:'form'
	},
	iconCls: 'icon-key',
	title:"login",
	closeAction: 'hide',
	closable:false,
	items	:[
		{
			xtype	: 'textfield',
			fieldLabel	: 'username',
			emptyText	: 'type username here',
			name		: 'username',
			msgTarget	: 'bottom',
			allowBlank	: false,
			anchor		: '75%'
		},
		{
			xtype	: 'textfield',
			inputType	:'password',
			fieldLabel	: 'password',
			emptyText	: 'type password here',
			name		: 'password',
			msgTarget	: 'bottom',
			allowBlank	: false,
			anchor		: '75%'
		}
	],
	buttons	:	[
	{xtype:'button',text:'login',iconCls:'icon-login',action:'login'}
	]
});