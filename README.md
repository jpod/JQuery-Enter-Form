JQuery-Enter-Form
=================

this is very simple plugin to add enter event inside form element

How to use ? it's very simple !

<pre>
$('#elementform').enterform();
</pre>

How to reinitialize for example in ajax call ? 
<pre>
$.ajax({ 
  type: 'post',
	url: 'some_url_here'
	dataType:'html',
	success:function(response){
		// code here
		$('#elementform').enterform('reinitialize');
	}
});
</pre>
if you want to prevent several element for this enterform? just add class like this 
<pre>
<input type="text" id="name" name="name" class="nofocus">
</pre>

you can custom this plugin as you want

Hope you like it ! 
agindanoe@gmail.com
