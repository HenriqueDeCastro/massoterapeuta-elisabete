import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsEnum, slideLeft } from '../../../../shared/models';
import { IHomeProceduresCard } from './interfaces';
import { AnimationReferenceMetadata, transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'massoterapeuta-elisabete-home-procedures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-procedures.component.html',
  styleUrl: './home-procedures.component.scss',
  animations: [
    trigger("slideLeftAnimation", [
      transition("void => *", [useAnimation(slideLeft)]),
    ])
  ]
})
export class HomeProceduresComponent {
  sectionsEnum: typeof SectionsEnum;
  slideLeft: AnimationReferenceMetadata;
  cards: IHomeProceduresCard[];

  constructor() {
    this.sectionsEnum = SectionsEnum;
    this.slideLeft = slideLeft;
    this.cards = [
      {
        title: 'Massagem Terapêutica Personalizada',
        description: 'O tratamento ajuda a combater Insônia, Ansiedade, Dores Musculares, Fibromialgia, Dores Musculares entre outros problemas de saúde e desconfortos.',
        image: '../../../../../assets/images/massagem-terapeutica-personalizada.jpg',
        background: 'linear-gradient(to right, #bba592, #dac8b9 70%)',
        color: '#472e1a'
      },
      {
        title: 'Massagem Relaxante',
        description: 'Ajuda a diminuir o estresse e ansiedade. Estimula circulação sanguínea. Diminui dores musculares. Melhora qualidade de sono.',
        image: '../../../../../assets/images/massagem-relaxante.jpg',
        background: 'linear-gradient(to right, #a89163, #dcd2be 70%)',
        color: '#3c1100'
      },
      {
        title: 'Drenagem Linfática',
        description: 'Reduz inchaços, ativa a circulação sanguínea e potencializa uma rede complexa de vasos que movem o fluido do corpo reduzindo a celulite. Resultando em um corpo menos inchado e torneado com o metabolismo mais acelerado e sensação de bem estar.',
        image: '../../../../../assets/images/drenagem-linfatica.jpg',
        background: 'linear-gradient(to right, #d1a393, #E8D8D6 70%)',
        color: '#a12800'
      },
      {
        title: 'Pós Operatório',
        description: 'dução de inchaço. Alívio da dor e desconforto. Melhora a cicatrização. Prevenção de complicações. Estímulo ao Sistema Imunológico.',
        image: '../../../../../assets/images/pos-operatorio.jpg',
        background: 'linear-gradient(to right, #ebd6b0, #f5efe3 70%)',
        color: '#c77200'
      },
      {
        title: 'Massagem Esfoliante',
        description: 'Elimina toxinas. Clareia manchas. Remove células mortas. Alivia tensão e estresse. Melhora circulação sanguínea. Deixa a textura da pele mais uniforme. Previne o aparecimento de pelos encravados.',
        image: '../../../../../assets/images/massagem-esfoliante.jpg',
        background: 'linear-gradient(to right,#26140b, #45231a 70%)',
        color: '#ffe4cb'
      }
    ]
  }
}
