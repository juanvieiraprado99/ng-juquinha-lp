import { Injectable } from '@angular/core';
import { GithubRepository } from '@interfaces/github';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService extends BaseService {
  getRepositoryInfo() {
    return this.get<GithubRepository>(
      'https://api.github.com/repos/juanvieiraprado99/ng-juquinha'
    );
  }
}
