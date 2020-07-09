function ordenarListas(lista1, lista2) {
    var Listas = [], l1 = 0, l2 = 0;

    while (l1 < lista1.length && l2 < lista2.length) {
        if (sortFn(lista1[l1], lista2[l2]) > 0) {
            Listas.push(lista2[l2++]);
        } else {
            Listas.push(lista1[l1++]);
        }
    }

    if (l2 < lista2.length) {
        Listas = Listas.concat(lista2.slice(l2));
    } else {
        Listas = Listas.concat(lista1.slice(l1));
    }

    return Listas;
}

function sortFn(lista1, lista2) {
    return lista1 - lista2;
}

console.log(ordenarListas([1,2,4],[1,3,4]));
