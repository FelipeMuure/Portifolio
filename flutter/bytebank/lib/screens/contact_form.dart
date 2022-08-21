import 'package:bytebank/Models/contact.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class ContactForm extends StatefulWidget {
  ContactForm({Key? key}) : super(key: key);

  @override
  State<ContactForm> createState() => _ContactFormState();
}

class _ContactFormState extends State<ContactForm> {

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _accountNumberController = TextEditingController();


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('New Contact'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            TextField(
              controller: _nameController,
              decoration: InputDecoration(
                labelText: 'Full name',
              ),
              style: TextStyle(
                fontSize: 24.0,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(top: 8.0),
              child: TextField(
                controller: _accountNumberController,
                decoration: InputDecoration(
                  labelText: 'Account Number',
                ),
                style: TextStyle(
                  fontSize: 24.0,
                ),
                keyboardType: TextInputType.number,
              ),
            ),
            Padding(
                padding: EdgeInsets.only(top: 16.0),
                child: SizedBox(
                    width: double.maxFinite,
                    child: ElevatedButton(
                        onPressed: (){
                          final String name = _nameController.text;
                          final int? accountNumber = int.tryParse(_accountNumberController.text);
                          final Contact newContact = Contact(name, accountNumber!);
                          Navigator.pop(context, newContact);
                        },
                        child: Text('Create'))
                )),
          ],
        ),
      ),
    );
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<TextEditingController>(
        '_accountNumberController', _accountNumberController));
        properties.add(DiagnosticsProperty<TextEditingController>('_nameController', _nameController));
        properties.add(DiagnosticsProperty<TextEditingController>('_nameController', _nameController));
        properties.add(DiagnosticsProperty<TextEditingController>('_nameController', _nameController));
  }
}