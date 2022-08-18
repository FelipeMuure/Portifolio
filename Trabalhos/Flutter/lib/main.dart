import 'package:flutter/material.dart';
import 'package:my_app/screens/Cadastro/Lista.dart';

void main() => runApp(My_App());

class My_App extends StatelessWidget {

  Map<int, Color> color =
  {
    50:Color.fromRGBO(51,105,30, .1),
    100:Color.fromRGBO(51,105,30, .2),
    200:Color.fromRGBO(51,105,30, .3),
    300:Color.fromRGBO(51,105,30, .4),
    400:Color.fromRGBO(51,105,30, .5),
    500:Color.fromRGBO(51,105,30, .6),
    600:Color.fromRGBO(51,105,30, .7),
    700:Color.fromRGBO(51,105,30, .8),
    800:Color.fromRGBO(51,105,30, .9),
    900:Color.fromRGBO(51,105,30, 1),
  };

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          elevatedButtonTheme: ElevatedButtonThemeData(
              style: TextButton.styleFrom(
                  backgroundColor: Colors.blueAccent[700]
              )),
        colorScheme: ColorScheme.fromSwatch(
          primarySwatch: MaterialColor(0xFF336633, color),
        ).copyWith(
          secondary: Colors.blueAccent[400],
          primary: Colors.green[900], // Cor do thema
          onPrimary: Colors.white, // Cor da Fonte
          onSurface: Colors.black, // Cor da Linha da area
          onSecondary: Colors.white, // Cor da meio do Botão

      )
      ),
      home: ListaTransferencias(),
    );
  }
}







