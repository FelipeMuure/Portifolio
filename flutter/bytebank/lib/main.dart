import 'package:bytebank/Models/contact.dart';
import 'package:bytebank/database/app_database.dart';
import 'package:flutter/material.dart';

import 'screens/Dashboard.dart';
import 'screens/contacts_list.dart';

void main() {
  runApp(Bytebankapp());
}

class Bytebankapp extends StatelessWidget {
  Bytebankapp({Key? key}) : super(key: key);


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData().copyWith(
        colorScheme: ThemeData().colorScheme.copyWith(
            primary: Colors.green[700],
            secondary: Colors.blueAccent[700],
        ),
      ),
    home: Dashboard(),
    );
  }
}



