
function inserePlacar() {
    var corpoTable = $(".placar").find("tbody");
    var usuario = "José Malcher";
    var numPalavras = $("#contador-palavras").text();
    //var botaoRemover = "<a href='#' class='botao-remover'><i class='small material-icons'>delete</i></a>";
    /*     var linha = "<tr>" +
                    "<td>" + usuario + "</td>" +
                    "<td>" + numPalavras + "</td>" +
                    "<td>" + botaoRemover + "</td>" +
                "</tr>"; */
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    //corpoTable.append(linha); //insere no final
    corpoTable.prepend(linha); //insere no final
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;

}

function removeLinha() {

    event.preventDefault();
    $(this).parent().parent().remove();

}