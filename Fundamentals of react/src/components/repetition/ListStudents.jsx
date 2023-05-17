import React from "react";
import alunos from "../../data/alunos";

export default props => {
    const alunosLi = alunos.map(aluno => {
        return (<li>
            {aluno.id} {aluno.nome} - {aluno.nota}
        </li>);
    })
    return (
        <div>
            {alunosLi}
        </div>
    )
}