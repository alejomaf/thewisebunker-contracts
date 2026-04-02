export declare enum UserRole {
    USER = "user",
    BASIC = "basic",
    PREMIUM = "premium",
    ADMIN = "admin"
}
export declare enum AuthProvider {
    LOCAL = "local",
    GOOGLE = "google"
}
export declare enum SubscriptionPlan {
    FREE = "free",
    BASIC = "basic",
    PREMIUM = "premium"
}
export declare enum SubscriptionStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    EXPIRED = "expired",
    PAST_DUE = "past_due"
}
export declare enum FileType {
    PDF = "pdf",
    DOC = "doc",
    DOCX = "docx"
}
export declare enum MetadataColumnType {
    TLDR = "tldr",
    CONCLUSIONS = "conclusions",
    RESULTS = "results",
    SUMMARIZED_ABSTRACT = "summarized_abstract",
    SUMMARIZED_INTRODUCTION = "summarized_introduction",
    METHODS_USED = "methods_used",
    LITERATURE_SURVEY = "literature_survey",
    LIMITATIONS = "limitations",
    CUSTOM = "custom"
}
export declare enum ParaphraseMode {
    ACADEMIC = "academic",
    FLUENT = "fluent",
    FORMAL = "formal",
    CREATIVE = "creative"
}
export declare enum CitationStyle {
    APA = "apa",
    MLA = "mla",
    CHICAGO = "chicago",
    HARVARD = "harvard",
    IEEE = "ieee"
}
export declare enum CitationSourceType {
    JOURNAL_ARTICLE = "journal_article",
    BOOK = "book",
    WEBSITE = "website",
    CONFERENCE_PAPER = "conference_paper",
    THESIS = "thesis"
}
export declare enum ChatMessageRole {
    USER = "user",
    ASSISTANT = "assistant"
}
export declare enum ChatSessionType {
    PDF = "pdf",
    FOLDER = "folder"
}
export declare enum PaymentStatus {
    PENDING = "pending",
    SUCCEEDED = "succeeded",
    FAILED = "failed",
    REFUNDED = "refunded",
    PARTIALLY_REFUNDED = "partially_refunded"
}
export declare enum DiscountCodeType {
    PERCENTAGE = "percentage",
    FIXED_AMOUNT = "fixed_amount"
}
export declare enum GeminiModel {
    FLASH = "gemini-3.1-flash-lite-preview",
    PRO = "gemini-3.1-pro-preview"
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
export declare const AI_TOKEN_WEIGHTS: {
    readonly FLASH_INPUT: 1;
    readonly FLASH_OUTPUT: 6;
    readonly PRO_INPUT: 8;
    readonly PRO_OUTPUT: 48;
};
export declare enum PdfAnnotationType {
    HIGHLIGHT = "highlight",
    NOTE = "note"
}
export declare enum NotebookStatus {
    DRAFT = "draft",
    PUBLISHED = "published",
    ARCHIVED = "archived"
}
export declare enum TicketStatus {
    OPEN = "open",
    IN_PROGRESS = "in_progress",
    RESOLVED = "resolved",
    CLOSED = "closed"
}
export declare enum TicketPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    URGENT = "urgent"
}
export declare enum TicketCategory {
    BUG = "bug",
    FEATURE_REQUEST = "feature_request",
    ACCOUNT = "account",
    BILLING = "billing",
    GENERAL = "general"
}
export declare enum StudyDatabase {
    OPENALEX = "openalex",
    SEMANTIC_SCHOLAR = "semantic_scholar",
    PUBMED = "pubmed",
    CROSSREF = "crossref",
    IEEE_XPLORE = "ieee_xplore",
    DBLP = "dblp",
    ARXIV = "arxiv",
    DOAJ = "doaj",
    BASE = "base",
    OPENAIRE = "openaire"
}
export declare enum StudyAccessStatus {
    OPEN = "open",
    CLOSED = "closed",
    UNKNOWN = "unknown"
}
export declare enum StudySortBy {
    RELEVANCE = "relevance",
    CITATIONS = "citations",
    YEAR_DESC = "year_desc",
    YEAR_ASC = "year_asc"
}
export declare enum ExportFormat {
    CSV = "csv",
    BIBTEX = "bibtex",
    RIS = "ris",
    ANNOTATIONS = "annotations",
    ZIP = "zip"
}
export type ExportScope = 'selection' | 'folder' | 'all';
//# sourceMappingURL=index.d.ts.map