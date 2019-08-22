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
      imgSrc: 'assets/img/projects/project-1.jpg'
    },
    {
      title: 'Навес по ул. Павлова, 5а в г. Могилеве с благоустройством территории',
      imgSrc: 'assets/img/projects/project-2.jpg'
    },
    {
      title: 'Строительство магазина взамен сносимого здания магазина №2 по адресу: г. Заславль, ул. Путейко',
      imgSrc: 'assets/img/projects/project-3.jpg'
    },
    {
      title: 'Строительство объекта торговли в а / г Лошаны Минского района',
      imgSrc: 'assets/img/projects/project-4.jpg'
    },
    {
      title: 'Строительство производственной базы в г. Фаниполь, Дзержинского района',
      imgSrc: 'assets/img/projects/project-5.jpg'
    },
    {
      title: `Реконструкция производственно-складского комплекса, расположенного по адресу: Минский район,
        Щомыслицкий с/с, 58, район д. Новый Двор`,
      imgSrc: 'assets/img/projects/project-6.jpg'
    },
    {
      title:
        'Реконструкция здания бывшей военной комендатуры по переулку Водопроводному, 11 в г. Слониме под жилой дом',
      imgSrc: 'assets/img/projects/project-7.jpg'
    }
  ];

  public scrollToElement(index: string): void {
    const element = document.querySelector(`#project-${index}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
