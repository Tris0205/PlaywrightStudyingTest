import { Block, KnownBlock } from '@slack/types';
import { SummaryResults } from "playwright-slack-report/dist/src";;
import { slackReporter, getReportUrl } from 'playwright-slack-report';

export default function generateCustomLayoutSimpleExample(
  summaryResults: SummaryResults,
): Array<Block | KnownBlock> {
  const slackOAuthToken = '';
  const reporter = slackReporter({ token: slackOAuthToken });
  const reportUrl = getReportUrl(reporter);

   return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          summaryResults.failed < 1
            ? ':tada: All tests passed!'
            : `😭${summaryResults.failed} failure(s) out of ${summaryResults.tests.length} tests`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Allure Report: ${reportUrl}`,
      },
    },
  ];
}

// import { Block, KnownBlock } from '@slack/types';
// import { SummaryResults } from "playwright-slack-report/dist/src";;

// export default function generateCustomLayoutSimpleExample(
//   summaryResults: SummaryResults,
// ): Array<Block | KnownBlock> {
//   return [
//     {
//       type: 'section',
//       text: {
//         type: 'mrkdwn',
//         text:
//           summaryResults.failed < 1
//             ? ':tada: All tests passed!'
//             : `😭${summaryResults.failed} failure(s) out of ${summaryResults.tests.length} tests`,
//       },
//     },
//   ];
// }
