export const content = {
  intro: {
    name: "星野 舜",
    easy: {
      body: "Googleスプレッドシートを軸にした業務管理システムを作っています。\n\n普段使っているスプレッドシートをそのまま活かしながら、\nチームが見やすく使いやすいアプリに仕立てるのが得意です。\nAIを相棒にして、設計から開発まで一人で対応しています。",
    },
    tech: {
      body: "Google Sheets APIとGASを基盤にした業務管理システムを設計・構築しています。\n\nClaudeチャットで要件定義・アーキテクチャ設計を行い、\nClaude Codeに設計書を渡して実装するAI駆動開発スタイル。\nNext.js + Vercel構成とGAS Web App構成の2パターンで実績があります。",
    },
  },

  projects: [
    {
      number: "01",
      title: "お問い合わせ管理システム",
      service: "スキルプラス",
      screenshot: "/screenshots/project1.png",
      easy: {
        description:
          "ToC向け情報商材サービス「スキルプラス」の顧客対応を管理するために作ったシステムです。\n\nもともとは21項目あるスプレッドシートとDiscordで運用していたのですが、対応状況が見えづらく、誰がどこまで進めたかわからない状態でした。そこで項目を9つまで厳選し、ステータスを見るだけで次にやることがわかる設計にして、専用のウェブアプリを作りました。\n\nセルをクリックするだけで編集でき、変更は即座にスプレッドシートに反映されます。「完了」にすると自動で完了シートに移動し、種別を変えると正しいシートに移動する自動化も入っています。現在7人のチームで日常的に使っています。",
        tags: [
          "5段階ステータス",
          "3シート + 統合ビュー",
          "クリックで即編集",
          "自動シート移動",
          "スマホ対応",
          "Googleログイン",
        ],
      },
      tech: {
        description:
          'ToC向け情報商材サービス「スキルプラス」の顧客対応（抗弁書・弁護士・消費者センター案件）を管理するシステム。Next.js 14 + Google Sheets API v4 で、スプレッドシートをDBとしたCRUD Webアプリを構築しました。\n\n21項目を9項目に厳選する業務設計から始め、ステータスは5段階（未対応/対応中/先方待ち/要対応/完了）に設計。「一目で次のアクションが分かる」を原則にし、2列読ませる設計（ステータス+保留理由）を排除しました。\n\n認証は当初サービスアカウント方式で設計しましたが、Google Workspaceの組織ポリシー（iam.disableServiceAccountKeyCreation）でブロックされたため、OAuth2（NextAuth.js）に全面変更。結果的にユーザー識別も可能になり改善につながりました。\n\nインライン編集は楽観的更新パターンで、UIを即座に反映しAPI失敗時にロールバック。GASのonEditで双方向自動移動（ステータス変更・種別変更）を実装しています。',
        tags: [
          "Next.js 14 (App Router)",
          "TypeScript",
          "Tailwind CSS + shadcn/ui",
          "Google Sheets API v4",
          "NextAuth.js (OAuth2)",
          "GAS onEdit (双方向)",
          "楽観的更新",
          "レスポンシブ",
          "キーボードショートカット",
        ],
        stack:
          "Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · Google Sheets API v4 · NextAuth.js (OAuth2) · Vercel",
        decisions: [
          {
            title: "認証方式",
            detail:
              "サービスアカウント → 組織ポリシーでブロック → OAuth2に変更。結果的にユーザー識別が可能に。",
          },
          {
            title: "ステータス設計",
            detail:
              "初期4段階 → 「保留中」が曖昧 → 「先方待ち」「要対応」に分割して5段階に。ステータスだけで待ちの方向がわかるように。",
          },
          {
            title: "シート構成",
            detail:
              "1シート → チーム要望で3シート分割。ウェブアプリには「すべて」タブで統合ビューを追加し、両方のニーズに対応。",
          },
          {
            title: "改善サイクル",
            detail:
              "v1リリース後にチームFBでv2改修（3シート分割+ステータス再設計）、さらにUI品質改善21項目を実施。",
          },
        ],
      },
    },
    {
      number: "02",
      title: "末端ゴール通知システム",
      service: "Addness",
      screenshot: "/screenshots/project2.png",
      easy: {
        description:
          "自社のゴール管理ツール「Addness」を使って、200名の社員に毎朝「今日集中すべきゴール」を通知するシステムです。\n\nゴールには階層構造があり、一番下にある具体的なゴール（末端ゴール）が日々フォーカスすべきタスクになります。このデータを自動で取得して整理し、毎朝Google Chatで届くようにしました。\n\nさらに「ゴールが設定されていない人」「期限が過ぎている人」「ゴールの粒度が粗い人」を自動で検出する仕組みも入れています。管理職が200人の状況を毎朝把握できるようになることが目標で、現在データ取得の基盤部分が完成しています。",
        tags: [
          "毎朝自動通知",
          "問題の自動検出",
          "5画面ダッシュボード",
          "200人規模対応",
          "完全無料",
          "ログイン不要",
        ],
      },
      tech: {
        description:
          "自社ゴール管理SaaS「Addness」のobjectives APIからゴール階層データを取得し、末端ゴール（子ゴール0件）を判定して毎朝通知するシステム。4コンポーネント構成（Chrome拡張 + GASバックエンド + Google Chat + GAS Web App）で設計しました。\n\nChrome拡張v10でAddness APIから全メンバーのゴールを取得（parentObjectiveIdでツリー構築）。GAS doPostでRAWデータを受け取り、1分後の一時トリガーでprocessGoalTreeを実行する分離設計にしています（GAS 6分制限対策）。\n\n異常検知は4基準（ゴール未設定/粒度が粗い/期限超過・停滞/分解漏れ）をすべてルールベースで判定。当初5基準でしたが、APIにprogressフィールドが存在しないことが判明し「進捗ペース異常」を削除しました。\n\nスプレッドシートは既存のスプシ③と共用せず、スプシ④として新規独立。既存GASとのdoPost衝突やトリガー混在を回避する設計です。",
        tags: [
          "Chrome Extension (Manifest V3)",
          "GAS doPost + Trigger分離",
          "4基準ルールベース異常検知",
          "Google Chat Webhook",
          "GAS Web App + React SPA",
          "Session.getActiveUser() 認証",
          "7シート構成",
          "50人バッチ Token Refresh",
        ],
        stack:
          "Chrome拡張 (Manifest V3) · GAS (doPost/doGet/Trigger) · Google Chat Webhook · GAS Web App + React SPA",
        decisions: [
          {
            title: "独立スプシ",
            detail:
              "既存スプシ③と共用 → doPost衝突リスク → スプシ④を新規作成。壊れても既存システムに影響ゼロ。",
          },
          {
            title: "スケール対応",
            detail:
              "35人想定 → 全員通知(200人)に拡大 → 部署別Webhook + バッチ処理 + doPost/processGoalTree分離。",
          },
          {
            title: "異常検知基準",
            detail:
              "5基準 → APIにprogress無し → 4基準に。将来preview APIで復活可能な設計。",
          },
          {
            title: "通知方式",
            detail:
              "Google Chat（無料・Webhook一発）を推奨。LINEは月5,000円だが後追い対応できる設計に。",
          },
        ],
      },
    },
  ],

  capabilities: {
    sectionTitle: "できること",
    sectionDescription:
      "これまで取り組んできたことと、\n同じ構成で対応できる領域です。",
    cards: [
      {
        icon: "Monitor",
        easy: {
          title: "スプシのアプリ化",
          description:
            "スプレッドシートのデータをそのまま使う見やすいアプリ",
        },
        tech: {
          title: "スプシ連動Webアプリ",
          description:
            "Next.js + Sheets API v4によるCRUDアプリ。OAuth2認証対応",
        },
      },
      {
        icon: "LayoutDashboard",
        easy: {
          title: "ダッシュボード",
          description: "ブラウザで見れる管理画面を無料で作る",
        },
        tech: {
          title: "GAS Web App",
          description:
            "doGet + React SPA。Session.getActiveUser()認証",
        },
      },
      {
        icon: "Download",
        easy: {
          title: "データ自動取得",
          description: "外部ツールからデータを自動で取得して蓄積",
        },
        tech: {
          title: "Chrome拡張→GAS連携",
          description:
            "Manifest V3拡張→doPost→スプシ蓄積パイプライン",
        },
      },
      {
        icon: "Bell",
        easy: {
          title: "自動通知",
          description: "毎朝決まった時間にチャットに自動送信",
        },
        tech: {
          title: "Chat/LINE通知",
          description:
            "Google Chat Webhook + LINE Messaging API設計済み",
        },
      },
      {
        icon: "RefreshCw",
        easy: {
          title: "ステータスで自動整理",
          description:
            "ステータスを変えるだけでシート間を自動移動",
        },
        tech: {
          title: "GAS onEdit自動化",
          description:
            "onEditでの双方向移動。種別変更にも対応",
        },
      },
      {
        icon: "Search",
        easy: {
          title: "問題の自動検出",
          description: "ルールを決めて毎日自動チェック・警告",
        },
        tech: {
          title: "ルールベース異常検知",
          description:
            "正規表現+数値比較。外部API課金ゼロ。AI判定移行設計済み",
        },
      },
    ],
    extraText: {
      easy: "この他にも、管理画面全般・分析ダッシュボード・Slack/Discord連携・外部SaaS連携など、同じ構成で幅広く対応できます。",
      tech: "在庫/勤怠/顧客/タスク管理のスプシ+Webアプリ構成、Looker Studio連携、Webhook/Bot APIによるSlack・Discord連携、REST API呼び出しパイプライン（OAuth/APIキー/Cookie認証）に対応可能です。",
    },
  },

  process: {
    sectionTitle: "つくりかた",
    easy: {
      description:
        "自分ではコードを書きません。\n\n業務の課題をじっくり聞いて、最適な仕組みを設計するところに集中し、プログラミングはAI（Claude Code）に任せています。「コードが書けなくても、業務をよく理解していれば良いシステムは作れる」というのが、2つのプロジェクトを通じて実感していることです。",
    },
    tech: {
      description:
        "Claudeチャットで業務分析・要件定義・アーキテクチャ設計を行い、設計書をClaude Codeに渡して実装させるAI駆動開発スタイルです。\n\n設計書には型定義・API仕様・画面設計・ディレクトリ構成を漏れなく記述し、実装の忠実度を担保しています。改修時は変更箇所だけをまとめた差分プロンプトを作成。Phase方式で各フェーズ完了後に次に進む段階的な開発フローを採用しています。",
    },
    steps: [
      {
        icon: "MessageSquare",
        easy: "整理する",
        tech: "業務分析・要件定義",
      },
      {
        icon: "FileText",
        easy: "設計する",
        tech: "設計書作成",
      },
      {
        icon: "Zap",
        easy: "作る",
        tech: "Claude Code実装",
      },
      {
        icon: "Rocket",
        easy: "届ける",
        tech: "デプロイ",
      },
      {
        icon: "RefreshCw",
        easy: "直す",
        tech: "FB→改善サイクル",
      },
    ],
    phases: [
      {
        title: "Phase 1: 業務設計",
        detail:
          "フロー分析、項目の取捨選択、ステータス設計、列配置の動線設計",
      },
      {
        title: "Phase 2: スプレッドシート構築",
        detail: "プルダウン・条件付き書式・GAS自動化",
      },
      {
        title: "Phase 3: ウェブアプリ設計",
        detail:
          "8セクションの設計書作成（型定義・API仕様・画面設計含む）",
      },
      {
        title: "Phase 4: 実装",
        detail:
          "Claude Codeに設計書を渡して優先順位付きで実装指示",
      },
      {
        title: "Phase 5: 認証・環境設定",
        detail: "Google Cloud OAuth2設定、環境変数管理",
      },
      {
        title: "Phase 6: デプロイ・テスト",
        detail: "Vercel自動デプロイ or GAS Web Appデプロイ",
      },
      {
        title: "Phase 7: UI品質改善",
        detail:
          "チームフィードバック→改善サイクル（21項目改善の実績）",
      },
    ],
  },

  footer: {
    name: "星野 舜",
    year: "2026",
  },
};
