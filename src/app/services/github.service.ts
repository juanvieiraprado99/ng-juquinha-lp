import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { GithubRepository } from '../interfaces/github';

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
