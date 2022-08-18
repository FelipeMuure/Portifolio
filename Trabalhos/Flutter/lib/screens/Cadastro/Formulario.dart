import 'package:flutter/material.dart';
import 'package:my_app/models/Transferencia.dart';

import '../../components/Editor.dart';

class FormularioTransferencia extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return FormularioTransferenciaState();
  }
}

class FormularioTransferenciaState extends State<FormularioTransferencia> {
  final TextEditingController _controladorCampoNumeroConta =
  TextEditingController();
  final TextEditingController _controladorCampoValor = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Criando Transferências'),
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Editor(
                controlador: _controladorCampoNumeroConta,
                dica: '0000',
                rotulo: 'Número da conta',
                icone: Icons.account_box,
              ),
              Editor(
                controlador: _controladorCampoValor,
                dica: '0.00',
                rotulo: 'Valor',
                icone: Icons.monetization_on,
              ),
              ElevatedButton(
                  onPressed: () {
                    _criaTransferencia(context);
                  },
                  child: const Text(
                    ''
                        'Confirmar',
                    style: TextStyle(fontSize: 22),
                  )),
            ],
          ),
        ));
  }

  void _criaTransferencia(BuildContext context) {
    final int? numeroConta = int.tryParse(_controladorCampoNumeroConta.text);
    final double? valor = double.tryParse(_controladorCampoValor.text);
    if (numeroConta != null && valor != null) {
      final transferenciaCriada = Transferencia(valor, numeroConta);
      debugPrint('Criando transferencia');
      debugPrint('$transferenciaCriada');
      Navigator.pop(context, transferenciaCriada);
    }
  }
}