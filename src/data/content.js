export const content = {
  intro: {
    name: "星野 舜",
    easy: {
      body: "業務管理システムをAI駆動で設計・構築しています。\n\nGoogleスプレッドシートを活かしたアプリから、\nデータベース（Supabase）を使った本格的なシステムまで対応。\nチームが見やすく使いやすいアプリに仕立てるのが得意です。\n設計から開発まで一人で対応しています。",
    },
    tech: {
      body: "Google Sheets API・GAS・Supabaseを基盤にした業務管理システムを設計・構築しています。\n\nClaudeチャットで要件定義・アーキテクチャ設計を行い、\nClaude Codeに設計書を渡して実装するAI駆動開発スタイル。\nNext.js + Vercel構成、GAS Web App構成、Supabase + Vercel構成の3パターンで実績があります。",
    },
  },

  projects: [
    {
      number: "01",
      title: "お問い合わせ管理システム",
      service: "",
      screenshot: "",
      easy: {
        description:
          "ToC向けオンラインスクールの顧客対応を管理するために作ったシステムです。\n\nもともとは21項目あるスプレッドシートとDiscordで運用していたのですが、対応状況が見えづらく、誰がどこまで進めたかわからない状態でした。そこで項目を厳選し、ステータスを見るだけで次にやることがわかる設計にして、専用のウェブアプリを作りました。\n\nリリース後もチームの要望を反映し続け、10回のアップデートを経て、複数種別対応・行削除・赤伝期日の自動計算・ソート機能など16列で管理する本格的なシステムに成長しました。セルをクリックするだけで編集でき、変更は即座にスプレッドシートに反映されます。現在7人のチームで日常的に使っています。",
        tags: [
          "16列管理",
          "5段階ステータス",
          "Phase 10まで継続改善",
          "クリックで即編集",
          "自動シート移動",
          "スマホ対応",
        ],
      },
      tech: {
        description:
          'ToC向けオンラインスクールの顧客対応（抗弁書・弁護士・消費者センター案件）を管理するシステム。Next.js 14 + Google Sheets API v4 で、スプレッドシートをDBとしたCRUD Webアプリを構築しました。\n\n21項目を9項目に厳選する業務設計から始め、ステータスは5段階（未対応/対応中/先方待ち/要対応/完了）に設計。「一目で次のアクションが分かる」を原則にし、2列読ませる設計（ステータス+保留理由）を排除しました。\n\n認証は当初サービスアカウント方式で設計しましたが、Google Workspaceの組織ポリシー（iam.disableServiceAccountKeyCreation）でブロックされたため、OAuth2（NextAuth.js）に全面変更。結果的にユーザー識別も可能になり改善につながりました。\n\nインライン編集は楽観的更新パターンで、UIを即座に反映しAPI失敗時にロールバック。GASのonEditで双方向自動移動（ステータス変更・種別変更）を実装。Phase 10まで継続的に改善し、複数種別のカンマ区切り対応、完了日自動記録、行削除、スレッドリンク編集、赤伝期日の自動計算（受付日+30日）、受付日・完了日ソートなど9機能を追加。現在16列（A〜P）管理のシステムに成長しています。',
        tags: [
          "Next.js 14 (App Router)",
          "TypeScript",
          "Tailwind CSS + shadcn/ui",
          "Google Sheets API v4",
          "NextAuth.js (OAuth2)",
          "GAS onEdit v2.1 (双方向)",
          "楽観的更新",
          "16列CRUD",
          "複数種別対応",
        ],
        stack:
          "Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · Google Sheets API v4 · NextAuth.js (OAuth2) · GAS (onEdit v2.1) · Vercel",
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
            title: "継続的改善",
            detail:
              "Phase 10まで段階的に拡張。9項目→14列→16列と、チーム要望に応じて機能追加。カンマ区切り種別対応・赤伝期日自動計算・ソート等、実運用から生まれた改善。",
          },
        ],
      },
    },
    {
      number: "02",
      title: "末端ゴール通知システム",
      service: "",
      screenshot: "",
      easy: {
        description:
          "自社ゴール管理ツールを使って、200名の社員に毎朝「今日集中すべきゴール」を通知するシステムです。\n\nゴールには階層構造があり、一番下にある具体的なゴール（末端ゴール）が日々フォーカスすべきタスクになります。このデータを自動で取得して整理し、毎朝Google Chatで届くようにしました。\n\nさらに「ゴールが設定されていない人」「期限が過ぎている人」「ゴールの粒度が粗い人」を自動で検出する仕組みも入れています。管理職が200人の状況を毎朝把握できるようになることが目標で、現在データ取得の基盤部分が完成しています。",
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
          "自社ゴール管理ツールのobjectives APIからゴール階層データを取得し、末端ゴール（子ゴール0件）を判定して毎朝通知するシステム。4コンポーネント構成（Chrome拡張 + GASバックエンド + Google Chat + GAS Web App）で設計しました。\n\nChrome拡張v10で自社ゴール管理ツールのAPIから全メンバーのゴールを取得（parentObjectiveIdでツリー構築）。GAS doPostでRAWデータを受け取り、1分後の一時トリガーでprocessGoalTreeを実行する分離設計にしています（GAS 6分制限対策）。\n\n異常検知は4基準（ゴール未設定/粒度が粗い/期限超過・停滞/分解漏れ）をすべてルールベースで判定。当初5基準でしたが、APIにprogressフィールドが存在しないことが判明し「進捗ペース異常」を削除しました。\n\nスプレッドシートは既存のスプシ③と共用せず、スプシ④として新規独立。既存GASとのdoPost衝突やトリガー混在を回避する設計です。",
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
    {
      number: "03",
      title: "Todoダッシュボード",
      service: "",
      screenshot: "",
      easy: {
        description:
          "チームの日々のタスクをスマホ・PCからサクサク管理できるアプリです。\n\n当初はGoogleスプレッドシートで管理していましたが、スマホから見づらく「今日何をやるか」がすぐにわからない状態でした。そこで専用アプリを開発し、さらにスプレッドシートからデータベース（Supabase）に移行して本格的なシステムに進化させました。\n\n6つのタブ（今日/タスク一覧/アイデア/知識リンク/構成/履歴）で情報を整理。スワイプで完了・削除、タッチドラッグで並び替えが可能です。毎日0時にVercel Cronで自動リセットされるので、毎朝のタスク設定は不要。マスタータスクの完了状態も自動同期されます。",
        tags: [
          "6タブ構成",
          "スワイプ操作",
          "自動リセット",
          "DB移行済み",
          "スマホ最適化",
          "ログイン認証",
        ],
      },
      tech: {
        description:
          "当初GAS Web App + Googleスプレッドシート4シートで構築したSPAを、Supabase（PostgreSQL + RLS）+ Vercel構成にフルマイグレーションしました。\n\nSupabaseに4テーブル（tasks, daily_tasks, completed_tasks, settings）を設計し、全テーブルにRLS（Row Level Security）を適用。認証はSupabase Auth（メール+パスワード）に移行しました。\n\n移行時はgoogle.script.run互換のGASRunnerシムを設計し、既存の17関数をSupabase REST APIにマッピング。フロントエンドのコード変更を最小限に抑えつつ、バックエンドを完全に置き換えています。\n\n日次リセットはVercel Cron Job（毎日0:00 JST）がdaily_reset() SQL関数（SECURITY DEFINER）を実行する構成。完了タスクの履歴移動・繰り返しタスクの再投入・マスターの完了状態同期を自動処理します。",
        tags: [
          "Supabase (PostgreSQL + RLS)",
          "Supabase Auth",
          "Vercel (Hosting + Cron)",
          "HTML SPA (6タブ)",
          "GASRunner互換シム",
          "daily_reset() SQL関数",
          "REST API CRUD",
          "GitHub CI/CD",
        ],
        stack:
          "Supabase (PostgreSQL + RLS + Auth) · Vercel (Hosting + Cron) · GitHub · バニラ HTML/CSS/JS SPA",
        decisions: [
          {
            title: "GASRunner互換シム",
            detail:
              "google.script.runの全17関数をSupabase REST APIにマッピングする互換レイヤーを設計。フロントエンド側の変更を最小限に抑えてバックエンド移行を実現。",
          },
          {
            title: "RLS設計",
            detail:
              "全4テーブルにRow Level Securityを適用。認証ユーザーのみアクセス可能にし、GASのSession.getActiveUser()相当のセキュリティを確保。",
          },
          {
            title: "Cron Job設計",
            detail:
              "Vercel Cron + SECURITY DEFINER SQL関数の構成。Deployment Protection有効時にCronがブロックされる問題を特定・解決した実績あり。",
          },
          {
            title: "段階的移行",
            detail:
              "GAS Web App → Supabase+Vercelへの移行。データ移行（136タスク+16日次タスク）もREST API経由でバッチ実施。",
          },
        ],
      },
    },
    {
      number: "04",
      title: "京都旅行しおりアプリ",
      service: "",
      screenshot: "",
      easy: {
        description:
          "家族5人の京都旅行で使う、スマホ向けの旅のしおりアプリです。\n\nスケジュール・地図・費用・天気を1つのアプリにまとめ、スマホで開くだけで旅行の全情報がわかるようにしました。オフラインでも使えるPWA対応で、電波が弱い場所でも安心です。\n\nタイムライン形式で3日間のスケジュールを表示し、各スポットにはGoogleマップのリンク付き。「NOW」ハイライトで今いるべき場所がすぐわかります。旅行当日にはInstagram Stories風のストーリーモードが解禁されるサプライズ演出も入れました。",
        tags: [
          "タイムライン表示",
          "オフライン対応",
          "天気予報",
          "費用管理",
          "ストーリーモード",
          "ダークモード",
        ],
      },
      tech: {
        description:
          "フレームワークなし（ES5バニラJS）で軽量SPAを構築。Service Workerでオフラインキャッシュを実現し、GitHub Pagesで無料デプロイしています。\n\nOpen-Meteo APIでリアルタイム天気予報を取得し、localStorageでユーザーデータ（写真・レビュー・ハイライト）をクライアントサイドに永続化。STORY_UNLOCK = 1773640800000（2026-03-16 15:00 JST）でタイムスタンプベースの機能ロック/解禁を制御しています。\n\nES5準拠（var, function式）で幅広いブラウザ互換性を確保。CDN依存なしでオフライン完全対応を実現しました。",
        tags: [
          "バニラ JS (ES5)",
          "Service Worker (PWA)",
          "Open-Meteo API",
          "localStorage永続化",
          "GitHub Pages",
          "タイムスタンプ機能制御",
          "NOWハイライト",
          "ダークモード",
        ],
        stack:
          "HTML/CSS/JavaScript (ES5) · Open-Meteo API · localStorage · Service Worker · GitHub Pages",
        decisions: [
          {
            title: "ES5準拠",
            detail:
              "var, function式を使用。幅広いブラウザ互換性を確保しつつ、CDN依存なしでオフライン完全対応。",
          },
          {
            title: "機能ロック/解禁",
            detail:
              "STORY_UNLOCKタイムスタンプで旅行当日までストーリーモード等をロック。当日のサプライズ演出。",
          },
          {
            title: "フレームワーク不使用",
            detail:
              "CDN依存をゼロにしてService Workerによるオフライン完全対応を実現。軽量で高速表示。",
          },
        ],
      },
    },
    {
      number: "05",
      title: "Cortex — AIエージェント自動化基盤",
      service: "",
      screenshot: "",
      easy: {
        description:
          "Discord上で指示を出すだけで、コード修正・Git push・SNS投稿・データベース修復などを自律的に実行してくれるAIボットシステムです。\n\n「@Cortex バグ直して」と送るだけで、コードの修正からGit push、Vercelへの自動デプロイまで一貫して実行。SNS投稿は5つのAIエージェントが連携し、v3では過去100投稿との類似度チェック・15種類のテンプレート自動ローテーション・バズ投稿の検出と派生投稿の自動生成まで行います。\n\nデータベースのエラーを自動検出・修復する「自己修復機能」や、放置タスクを検出して対応を促す「コーチングモード」も搭載。スマホのDiscordから指示するだけで、PCで自動実行→結果がDiscordに返ってきます。",
        tags: [
          "Discord AIボット",
          "SNS Autopilot v3",
          "15テンプレ自動ローテーション",
          "バズ検出→派生投稿",
          "自己修復機能",
          "コーチングモード",
        ],
      },
      tech: {
        description:
          "Discord Bot + Claude Codeエージェントで構築したAI自動化基盤。Discordチャットで自然言語指示→Claude Codeがコード修正・Shell実行・Git push→Vercel自動デプロイのパイプラインを実現しています。\n\nコアインフラはcortex-api.sh（540+行）で、Supabase REST APIとの通信・認証・エラーハンドリング・自動リトライ・REST fallbackを担当。cortex-doctor.shがDDL（テーブル定義）の自動検証・修復を行い、欠損カラム・テーブルを自動復旧します。\n\nSNS Autopilot v3は5エージェント構成（Analyst→Strategist→Writer→Publisher→Scorer）。v3で追加した5つの品質保証機能: (1)バイグラム類似度による過去100投稿との重複チェック（0.85閾値）、(2)15テンプレートの強制ローテーション（直近3投稿と重複不可）、(3)40+パターンの1行目フックライブラリ、(4)バズピボット（平均×2倍のバズ→派生3投稿自動生成）、(5)品質ゲート強化（閾値未達→2回リライト→自動破棄）。\n\nbash vs Pythonの選択ではClaude Codeとの親和性を重視しbashを採用。macOS互換性問題（head -n -1 → sed '$d'のBSD/GNU差異）の発見・修正も実施。",
        tags: [
          "Discord Bot (discord.js)",
          "Claude Code Agent",
          "Bash 540+行 (cortex-api.sh)",
          "Supabase 9テーブル + 9 RPC",
          "SNS Autopilot v3",
          "類似度チェック + バズピボット",
          "DDL自動修復 (cortex-doctor.sh)",
          "Coaching Mode",
          "15テンプレート自動ローテーション",
        ],
        stack:
          "Discord Bot · Claude Code Agent · Bash · Supabase (PostgreSQL + RLS) · X API v2 · Vercel · GitHub",
        decisions: [
          {
            title: "bash vs Python",
            detail:
              "Claude Codeとの親和性を重視しbashを選択。シェルコマンド直接実行が可能で、540+行でも構造化設計で可読性を担保。",
          },
          {
            title: "REST API直接",
            detail:
              "Supabase JS SDKではなくcurl + REST APIを選択。Claude Code環境でNode.jsランタイム不要。エラー時のfallback設計も容易。",
          },
          {
            title: "5エージェント分離",
            detail:
              "SNS自動化を単一処理ではなく5エージェントに分離。各エージェントの責務を明確化し、一方向パイプラインで品質を担保。",
          },
          {
            title: "自己修復アーキテクチャ",
            detail:
              "cortex-doctor.shでDDL自動検証。テーブル/カラム欠損時にCREATE/ALTER文を自動生成・実行。人間の介入なしで復旧可能。",
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
          title: "GAS Web App / Supabase",
          description:
            "doGet + SPA、またはSupabase + Vercel構成に対応",
        },
      },
      {
        icon: "Database",
        easy: {
          title: "DB移行・構築",
          description:
            "スプレッドシートからデータベースへの移行も対応",
        },
        tech: {
          title: "Supabase (PostgreSQL)",
          description:
            "RLS + Auth + Vercel Cron。GAS互換シムで段階的移行",
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
      {
        icon: "Wifi",
        easy: {
          title: "オフライン対応アプリ",
          description: "電波がなくても使えるスマホアプリを作れる",
        },
        tech: {
          title: "PWA (Service Worker)",
          description:
            "Service Worker + localStorage。CDN依存なしでオフライン完全対応",
        },
      },
      {
        icon: "Bot",
        easy: {
          title: "AIエージェント構築",
          description: "チャットで指示するだけで自律動作するAIボット",
        },
        tech: {
          title: "Discord Bot + Claude Code",
          description:
            "自然言語指示→自律タスク実行。マルチエージェント・自己修復対応",
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
        "コードは一切書きません。\n\n業務の課題を丁寧にヒアリングして、最適な仕組みを設計するところに集中し、プログラミングはAI（Claude Code）に任せています。「業務をよく理解し、設計に集中することで良いシステムは作れる」というのが、これまでのプロジェクトを通じて実感していることです。",
    },
    tech: {
      description:
        "Claudeチャットで業務分析・要件定義・アーキテクチャ設計を行い、設計書をClaude Codeに渡して実装を委譲するAI駆動開発スタイルです。\n\n設計書には型定義・API仕様・画面設計・ディレクトリ構成を漏れなく記述し、実装の忠実度を担保しています。改修時は変更箇所だけをまとめた差分プロンプトを作成。Phase方式で各フェーズ完了後に次に進む段階的な開発フローを採用しています。",
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
