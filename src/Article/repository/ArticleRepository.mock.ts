import { Article } from '../domain/Article';
import { AbstractArticleRepository } from './AbstractArticleRepository';

const mockData = [
  {
    title: '윈도우 node-gyp 에러 해결하기',
    contents: '### 기타\n'
      + '\n'
      + '- 윈도우에서 node-gyp 이슈 해결하기\n'
      + '    - 윈도우라면 에러 메시지가 깨지고 있을 확률이 매우 높다. 이것부터 해결해서 확실한 에러 원인을 확인해야 한다. powershell 기준으로 아래 명령어를 사용한다.\n'
      + '\n'
      + '        ```jsx\n'
      + '        $env:LC_ALL=\'C.UTF-8\'\n'
      + '        ```\n'
      + '\n'
      + '    - node-gyp [README](https://github.com/nodejs/node-gyp) 에 나오는대로 윈도우의 빌드 환경을 구성한다.\n'
      + '\n'
      + '        ```jsx\n'
      + '        npm install --global windows-build-tools\n'
      + '        ```\n'
      + '\n'
      + '    - 기타 에러들은 [여기](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules)서 확인하여 대응한다.\n'
      + '    - 에러 메시지를 제대로 확인하지 않아서 헤맸는데, 나의 경우에는 python2.7 을 찾을 수 없어서 발생한 에러였다.\n'
      + '    - 공식문서에는 아래처럼 python2.7 설정을 하라고 하지만, 나의 경우에는 이것이 에러의 원인이 되었음.\n'
      + '\n'
      + '        ```jsx\n'
      + '        npm config set python python2.7 // python 2.7을 찾을수 없다는 에러가 발생\n'
      + '\n'
      + '        npm config set python python // 이렇게 python 명령어를 사용하도록 설정\n'
      + '        ```',
  },
  {
    title: 'API 설계 가이드',
    contents: '### [16.3.2 Handling an Unexpected Halt of a Replication Slave](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-unexpected-slave-halt.html)\n\n### [16.3.6 Improving Replication Performance](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-performance.html)\n\nAs the number of slaves connecting to a master increases, the load, although minimal, also increases, as each slave uses a client connection to the master. Also, as each slave must receive a full copy of the master binary log, the network load on the master may also increase and create a bottleneck.\n\nOne way to improve the performance of the replication process is to create a deeper replication structure that enables the master to replicate to only one slave, and for the remaining slaves to connect to this primary slave for their individual replication requirements\n\n→ replication 만 담당하는 slave master 를 따로 두는 방법으로 performance 를 향상시킬 수 있다.\n\n그 외에도 아래와 같은 방법이 존재\n\n- If possible, put the relay logs and the data files on different physical drives. To do this, set the `[relay_log](https://dev.mysql.com/doc/refman/5.7/en/replication-options-slave.html#sysvar_relay_log)` system variable to specify the location of the relay log.\n- If the slaves are significantly slower than the master, you may want to divide up the responsibility for replicating different databases to different slaves. See [Section 16.3.5, “Replicating Different Databases to Different Slaves”](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-partitioning.html).\n- If your master makes use of transactions and you are not concerned about transaction support on your slaves, use `MyISAM` or another nontransactional engine on the slaves. See [Section 16.3.3, “Using Replication with Different Master and Slave Storage Engines”](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-diffengines.html).\n- If your slaves are not acting as masters, and you have a potential solution in place to ensure that you can bring up a master in the event of failure, then you can disable the `[log_slave_updates](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_log_slave_updates)` system variable on the slaves. This prevents “dumb” slaves from also logging events they have executed into their own binary log.',
    createdAt: '2021-02-21 12:00',
    updatedAt: '2021-02-21 12:00',
  },
];

export default class ArticleRepositoryMock extends AbstractArticleRepository {
  get(): Promise<{ data: Article[]; next: string }> {
    return Promise.resolve({
      data: mockData.map((item) => (
        new Article(
          item.title,
          item.contents,
          new Date(),
          new Date(),
        )
      )),
      next: '',
    });
  }

  update(item: Article): Promise<void> {
    return Promise.resolve(undefined);
  }
}
