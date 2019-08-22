import { Component } from '@angular/core';

import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      title: 'Реконструкция здания под специализированное на розничной торговле по пер. Корженевского, 20а в г. Минске',
      imgSrc: '11111'
    },
    {
      title: 'Навес по ул. Павлова, 5а в г. Могилеве с благоустройством территории',
      imgSrc: '11111'
    },
    {
      title: 'Строительство магазина взамен сносимого здания магазина №2 по адресу: г. Заславль, ул. Путейко',
      imgSrc: '11111'
    },
    {
      title: 'Строительство объекта торговли в а / г Лошаны Минского района',
      imgSrc: '11111'
    },
    {
      title: 'Строительство производственной базы в г. Фаниполь, Дзержинского района',
      imgSrc: '11111'
    },
    {
      title: `Реконструкция производственно-складского комплекса, расположенного по адресу: Минский район,
        Щомыслицкий с/с, 58, район д. Новый Двор`,
      imgSrc: '11111'
    },
    {
      title:
        'Реконструкция здания бывшей военной комендатуры по переулку Водопроводному, 11 в г. Слониме под жилой дом',
      imgSrc: '11111'
    }
  ];

  public scrollToElement(index: string): void {
    const element = document.querySelector(`#project-${index}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
