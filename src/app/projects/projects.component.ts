import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';

import { Project } from './project.model';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  public projects: Project[] = [
    {
      title: 'Реконструкция производственных зданий в г. Минске',
      imgSrc: 'assets/img/projects/project-8.jpg'
    },
    {
      title: 'Многофункциональное здание, расположенное в г. Смолевичи',
      imgSrc: 'assets/img/projects/project-9.jpg'
    },
    {
      title: `Техническая модернизация изолированных помещений 5, 6 и 7-го этажей многофункционального торгово-бытового
              комплекса по ул. Нёманская, 24`,
      imgSrc: 'assets/img/projects/project-10.jpg'
    },
    {
      title:
        'Модернизация изолированных помещений, расположенных по адресу: г. Минск, ул. Платонова, 20Б-144 и 20Б-145',
      imgSrc: 'assets/img/projects/project-11.jpg'
    },
    {
      title: 'Строительство магазина в г. Пинск',
      imgSrc: 'assets/img/projects/project-12.jpg'
    },
    {
      title: 'Автовокзал в г. Архангельск',
      imgSrc: 'assets/img/projects/project-13.jpg'
    },
    {
      title: 'Строительство склада готовой продукции и в/г «Сёмков городок»',
      imgSrc: 'assets/img/projects/project-14.jpg'
    },
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

  ngAfterViewInit(): void {
    document.querySelector('.body').classList.add('height-auto');
    document.querySelector('.html').classList.add('height-auto');
  }

  ngOnDestroy(): void {
    document.querySelector('.body').classList.remove('height-auto');
    document.querySelector('.html').classList.remove('height-auto');
  }

  public scrollToElement(index: string): void {
    const element: HTMLElement = document.querySelector(`#project-${index}`);
    const yCoordinate: number = element.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight: number = document.querySelector('.header').clientHeight + 5;

    window.scrollTo({
      top: yCoordinate - headerHeight,
      behavior: 'auto'
    });
  }
}
