// =============================================
// User & Auth
// =============================================

export enum UserRole {
  USER = 'user',
  BASIC = 'basic',
  PREMIUM = 'premium',
  ADMIN = 'admin',
}

export enum AuthProvider {
  LOCAL = 'local',
  GOOGLE = 'google',
}

// =============================================
// Subscription
// =============================================

export enum SubscriptionPlan {
  FREE = 'free',
  BASIC = 'basic',
  PREMIUM = 'premium',
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired',
  PAST_DUE = 'past_due',
}

// =============================================
// Library
// =============================================

export enum FileType {
  PDF = 'pdf',
  DOC = 'doc',
  DOCX = 'docx',
}

export enum MetadataColumnType {
  TLDR = 'tldr',
  CONCLUSIONS = 'conclusions',
  RESULTS = 'results',
  SUMMARIZED_ABSTRACT = 'summarized_abstract',
  SUMMARIZED_INTRODUCTION = 'summarized_introduction',
  METHODS_USED = 'methods_used',
  LITERATURE_SURVEY = 'literature_survey',
  LIMITATIONS = 'limitations',
  CUSTOM = 'custom',
}

// =============================================
// Paraphraser
// =============================================

export enum ParaphraseMode {
  ACADEMIC = 'academic',
  FLUENT = 'fluent',
  FORMAL = 'formal',
  CREATIVE = 'creative',
}

// =============================================
// Citations
// =============================================

export enum CitationStyle {
  APA = 'apa',
  MLA = 'mla',
  CHICAGO = 'chicago',
  HARVARD = 'harvard',
  IEEE = 'ieee',
}

export enum CitationSourceType {
  JOURNAL_ARTICLE = 'journal_article',
  BOOK = 'book',
  WEBSITE = 'website',
  CONFERENCE_PAPER = 'conference_paper',
  THESIS = 'thesis',
}

// =============================================
// Chat
// =============================================

export enum ChatMessageRole {
  USER = 'user',
  ASSISTANT = 'assistant',
}

export enum ChatSessionType {
  PDF = 'pdf',
  FOLDER = 'folder',
}

// =============================================
// Payments
// =============================================

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded',
}

export enum DiscountCodeType {
  PERCENTAGE = 'percentage',
  FIXED_AMOUNT = 'fixed_amount',
}

export enum GeminiModel {
  FLASH = 'gemini-3.1-flash-lite-preview',
  PRO = 'gemini-3.1-pro-preview',
}

/**
 * Weights for converting raw tokens to weighted "AI tokens".
 * Base unit: 1 Flash input token = 1 AI token.
 * Ratios derived from Gemini pricing:
 *   Flash Input  $0.25/1M → 1x
 *   Flash Output $1.50/1M → 6x
 *   Pro Input    $2.00/1M → 8x
 *   Pro Output  $12.00/1M → 48x
 */
export const AI_TOKEN_WEIGHTS = {
  FLASH_INPUT: 1,
  FLASH_OUTPUT: 6,
  PRO_INPUT: 8,
  PRO_OUTPUT: 48,
} as const;

export enum PdfAnnotationType {
  HIGHLIGHT = 'highlight',
  NOTE = 'note',
}


// =============================================
// Notebook
// =============================================

export enum NotebookStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

// =============================================
// Tickets
// =============================================

export enum TicketStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed',
}

export enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

export enum TicketCategory {
  BUG = 'bug',
  FEATURE_REQUEST = 'feature_request',
  ACCOUNT = 'account',
  BILLING = 'billing',
  GENERAL = 'general',
}

// =============================================
// Study Search
// =============================================

export enum StudyDatabase {
  OPENALEX = 'openalex',
  SEMANTIC_SCHOLAR = 'semantic_scholar',
  PUBMED = 'pubmed',
  CROSSREF = 'crossref',
  IEEE_XPLORE = 'ieee_xplore',
  DBLP = 'dblp',
  ARXIV = 'arxiv',
  DOAJ = 'doaj',
  BASE = 'base',
  OPENAIRE = 'openaire',
}

export enum StudyAccessStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  UNKNOWN = 'unknown',
}

export enum StudySortBy {
  RELEVANCE = 'relevance',
  CITATIONS = 'citations',
  YEAR_DESC = 'year_desc',
  YEAR_ASC = 'year_asc',
}

// =============================================
// Library Export
// =============================================

export enum ExportFormat {
  CSV = 'csv',
  BIBTEX = 'bibtex',
  RIS = 'ris',
  ANNOTATIONS = 'annotations',
  ZIP = 'zip',
}

export type ExportScope = 'selection' | 'folder' | 'all';
