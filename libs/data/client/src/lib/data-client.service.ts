import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

import { TGetDataResult } from '../interfaces';

@Injectable()
export class DataClientService {
    axiosClient: AxiosInstance;

    constructor(
        private configService: ConfigService
    ) {
        const dataMicroserviceUrl = this.configService.get<string>('dataMicroserviceUrl');

        if (!dataMicroserviceUrl) {
            throw new Error('Missing Data Microservice Url');
        }

        this.axiosClient = axios.create({
          baseURL: `${dataMicroserviceUrl}/api`,
          timeout: 5000,
        });
    
        axiosRetry(this.axiosClient, {
          retries: 3,
          retryDelay: (retryCount) => retryCount * 2000,
          retryCondition: (error) => error.response?.status === 503,
        });
    }


    async getData(): Promise<TGetDataResult> {
        const result = await this.axiosClient({
            method: 'get'
          });

        return result.data  
      }
}
