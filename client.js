function consultarRestaurantes() {
  $.ajax({
    url: "http://api.algafood.local:8080/cozinhas",
    type: "get",

    success: function (response) {
      $("#conteudo").text(JSON.stringify(response));
    }
  });
}

function fecharRestaurante() {
  $.ajax({
    url: "http://api.algafood.local:8080/restaurantes/1/fechamento",
    type: "put",

    success: function (response) {
      alert("Restaurante foi fechado!");
    }
  });
}

function consultar() {
  var url = "http://api.algafood.local:8080/formas-pagamento"
  var codigo = $("#campo-codigo").val()

  if (codigo) url = url + "/" + codigo

  $.ajax({
    url: url,
    type: "get",

    success: function (response) {
      if (codigo){
        response = [response]
      }
      preencherTabela(response);
    }
  });
}

function cadastrar() {
  var formaPagamentoJson = JSON.stringify({
    "descricao": $("#campo-descricao").val()
  });

  console.log(formaPagamentoJson);

  $.ajax({
    url: "http://api.algafood.local:8080/formas-pagamento",
    type: "post",
    data: formaPagamentoJson,
    contentType: "application/json",

    success: function(response) {
      consultar();
      alert("Forma de pagamento adicionada!");
    },

    error: function(error) {
      if (error.status == 400) {
        var problem = JSON.parse(error.responseText);
        alert(problem.userMessage);
      } else {
        alert("Erro ao cadastrar forma de pagamento!");
      }
    }
  });
}

function excluir(formaPagamento) {
  var url = "http://api.algafood.local:8080/formas-pagamento/" + formaPagamento.id;

  $.ajax({
    url: url,
    type: "delete",

    success: function(){
      consultar();
      alert("Forma de pagamento excluída!")
    },

    error: function(error) {
      if (error.status >= 400 && error.status <= 499) {
        var problem = JSON.parse(error.responseText);
        alert(problem.userMessage);
      } else {
        alert("Erro ao excluir forma de pagamento!");
      }
    }
  });
}

function preencherTabela(formasPagamento) {
  $("#tabela tbody tr").remove();

  $.each(formasPagamento, function (i, formaPagamento) {
    var linha = $("<tr>");

    var linkAcao = $("<a href='#'>")
    .text("Excluir")
    .click(function(event) {
      event.preventDefault();
      excluir(formaPagamento);
    });

    linha.append(
      $("<td>").text(formaPagamento.id),
      $("<td>").text(formaPagamento.descricao),
      $("<td>").append(linkAcao)
    );

    linha.appendTo("#tabela");
  });
}


$("#botao").click(fecharRestaurante);
$("#btn-consultar").click(consultar);
$("#btn-cadastrar").click(cadastrar);