import 'package:bytebank/screens/contact_form.dart';
import 'package:flutter/material.dart';

class ContactsList extends StatelessWidget {
  ContactsList({Key? key}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Contacts'),
      ),
      body: ListView(
        children: <Widget>[
          Card(
            child: ListTile(
              title: Text('Felipe',
              style: TextStyle(
                fontSize: 24.0,
              ),
              ),
              subtitle: Text('1000',
              style: TextStyle(
                fontSize: 16.0,
              ),),
            )
          )
        ],
      ),
      floatingActionButton: Material(
        child: FloatingActionButton(onPressed: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (context) => ContactForm()
            ),
            ).then((newContact) => debugPrint(newContact.toString()));
        },
          child: Icon(
            Icons.add,
          ),

        ),
      ),
    );
  }
}
