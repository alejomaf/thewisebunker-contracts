"use strict";
// =============================================
// User & Auth
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportFormat = exports.StudySortBy = exports.StudyAccessStatus = exports.StudyDatabase = exports.TicketCategory = exports.TicketPriority = exports.TicketStatus = exports.NotebookStatus = exports.PdfAnnotationType = exports.AI_TOKEN_WEIGHTS = exports.GeminiModel = exports.DiscountCodeType = exports.PaymentStatus = exports.ChatSessionType = exports.ChatMessageRole = exports.CitationSourceType = exports.CitationStyle = exports.ParaphraseMode = exports.MetadataColumnType = exports.FileType = exports.SubscriptionStatus = exports.SubscriptionPlan = exports.AuthProvider = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["BASIC"] = "basic";
    UserRole["PREMIUM"] = "premium";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
var AuthProvider;
(function (AuthProvider) {
    AuthProvider["LOCAL"] = "local";
    AuthProvider["GOOGLE"] = "google";
})(AuthProvider || (exports.AuthProvider = AuthProvider = {}));
// =============================================
// Subscription
// =============================================
var SubscriptionPlan;
(function (SubscriptionPlan) {
    SubscriptionPlan["FREE"] = "free";
    SubscriptionPlan["BASIC"] = "basic";
    SubscriptionPlan["PREMIUM"] = "premium";
})(SubscriptionPlan || (exports.SubscriptionPlan = SubscriptionPlan = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["ACTIVE"] = "active";
    SubscriptionStatus["CANCELLED"] = "cancelled";
    SubscriptionStatus["EXPIRED"] = "expired";
    SubscriptionStatus["PAST_DUE"] = "past_due";
})(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
// =============================================
// Library
// =============================================
var FileType;
(function (FileType) {
    FileType["PDF"] = "pdf";
    FileType["DOC"] = "doc";
    FileType["DOCX"] = "docx";
})(FileType || (exports.FileType = FileType = {}));
var MetadataColumnType;
(function (MetadataColumnType) {
    MetadataColumnType["TLDR"] = "tldr";
    MetadataColumnType["CONCLUSIONS"] = "conclusions";
    MetadataColumnType["RESULTS"] = "results";
    MetadataColumnType["SUMMARIZED_ABSTRACT"] = "summarized_abstract";
    MetadataColumnType["SUMMARIZED_INTRODUCTION"] = "summarized_introduction";
    MetadataColumnType["METHODS_USED"] = "methods_used";
    MetadataColumnType["LITERATURE_SURVEY"] = "literature_survey";
    MetadataColumnType["LIMITATIONS"] = "limitations";
    MetadataColumnType["CUSTOM"] = "custom";
})(MetadataColumnType || (exports.MetadataColumnType = MetadataColumnType = {}));
// =============================================
// Paraphraser
// =============================================
var ParaphraseMode;
(function (ParaphraseMode) {
    ParaphraseMode["ACADEMIC"] = "academic";
    ParaphraseMode["FLUENT"] = "fluent";
    ParaphraseMode["FORMAL"] = "formal";
    ParaphraseMode["CREATIVE"] = "creative";
})(ParaphraseMode || (exports.ParaphraseMode = ParaphraseMode = {}));
// =============================================
// Citations
// =============================================
var CitationStyle;
(function (CitationStyle) {
    CitationStyle["APA"] = "apa";
    CitationStyle["MLA"] = "mla";
    CitationStyle["CHICAGO"] = "chicago";
    CitationStyle["HARVARD"] = "harvard";
    CitationStyle["IEEE"] = "ieee";
})(CitationStyle || (exports.CitationStyle = CitationStyle = {}));
var CitationSourceType;
(function (CitationSourceType) {
    CitationSourceType["JOURNAL_ARTICLE"] = "journal_article";
    CitationSourceType["BOOK"] = "book";
    CitationSourceType["WEBSITE"] = "website";
    CitationSourceType["CONFERENCE_PAPER"] = "conference_paper";
    CitationSourceType["THESIS"] = "thesis";
})(CitationSourceType || (exports.CitationSourceType = CitationSourceType = {}));
// =============================================
// Chat
// =============================================
var ChatMessageRole;
(function (ChatMessageRole) {
    ChatMessageRole["USER"] = "user";
    ChatMessageRole["ASSISTANT"] = "assistant";
})(ChatMessageRole || (exports.ChatMessageRole = ChatMessageRole = {}));
var ChatSessionType;
(function (ChatSessionType) {
    ChatSessionType["PDF"] = "pdf";
    ChatSessionType["FOLDER"] = "folder";
})(ChatSessionType || (exports.ChatSessionType = ChatSessionType = {}));
// =============================================
// Payments
// =============================================
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["SUCCEEDED"] = "succeeded";
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["REFUNDED"] = "refunded";
    PaymentStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var DiscountCodeType;
(function (DiscountCodeType) {
    DiscountCodeType["PERCENTAGE"] = "percentage";
    DiscountCodeType["FIXED_AMOUNT"] = "fixed_amount";
})(DiscountCodeType || (exports.DiscountCodeType = DiscountCodeType = {}));
var GeminiModel;
(function (GeminiModel) {
    GeminiModel["FLASH"] = "gemini-3.1-flash-lite-preview";
    GeminiModel["PRO"] = "gemini-3.1-pro-preview";
})(GeminiModel || (exports.GeminiModel = GeminiModel = {}));
/**
 * Weights for converting raw tokens to weighted "AI tokens".
 * Base unit: 1 Flash input token = 1 AI token.
 * Ratios derived from Gemini pricing:
 *   Flash Input  $0.25/1M → 1x
 *   Flash Output $1.50/1M → 6x
 *   Pro Input    $2.00/1M → 8x
 *   Pro Output  $12.00/1M → 48x
 */
exports.AI_TOKEN_WEIGHTS = {
    FLASH_INPUT: 1,
    FLASH_OUTPUT: 6,
    PRO_INPUT: 8,
    PRO_OUTPUT: 48,
};
var PdfAnnotationType;
(function (PdfAnnotationType) {
    PdfAnnotationType["HIGHLIGHT"] = "highlight";
    PdfAnnotationType["NOTE"] = "note";
})(PdfAnnotationType || (exports.PdfAnnotationType = PdfAnnotationType = {}));
// =============================================
// Notebook
// =============================================
var NotebookStatus;
(function (NotebookStatus) {
    NotebookStatus["DRAFT"] = "draft";
    NotebookStatus["PUBLISHED"] = "published";
    NotebookStatus["ARCHIVED"] = "archived";
})(NotebookStatus || (exports.NotebookStatus = NotebookStatus = {}));
// =============================================
// Tickets
// =============================================
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["OPEN"] = "open";
    TicketStatus["IN_PROGRESS"] = "in_progress";
    TicketStatus["RESOLVED"] = "resolved";
    TicketStatus["CLOSED"] = "closed";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));
var TicketPriority;
(function (TicketPriority) {
    TicketPriority["LOW"] = "low";
    TicketPriority["MEDIUM"] = "medium";
    TicketPriority["HIGH"] = "high";
    TicketPriority["URGENT"] = "urgent";
})(TicketPriority || (exports.TicketPriority = TicketPriority = {}));
var TicketCategory;
(function (TicketCategory) {
    TicketCategory["BUG"] = "bug";
    TicketCategory["FEATURE_REQUEST"] = "feature_request";
    TicketCategory["ACCOUNT"] = "account";
    TicketCategory["BILLING"] = "billing";
    TicketCategory["GENERAL"] = "general";
})(TicketCategory || (exports.TicketCategory = TicketCategory = {}));
// =============================================
// Study Search
// =============================================
var StudyDatabase;
(function (StudyDatabase) {
    StudyDatabase["OPENALEX"] = "openalex";
    StudyDatabase["SEMANTIC_SCHOLAR"] = "semantic_scholar";
    StudyDatabase["PUBMED"] = "pubmed";
    StudyDatabase["CROSSREF"] = "crossref";
    StudyDatabase["IEEE_XPLORE"] = "ieee_xplore";
    StudyDatabase["DBLP"] = "dblp";
    StudyDatabase["ARXIV"] = "arxiv";
    StudyDatabase["DOAJ"] = "doaj";
    StudyDatabase["BASE"] = "base";
    StudyDatabase["OPENAIRE"] = "openaire";
})(StudyDatabase || (exports.StudyDatabase = StudyDatabase = {}));
var StudyAccessStatus;
(function (StudyAccessStatus) {
    StudyAccessStatus["OPEN"] = "open";
    StudyAccessStatus["CLOSED"] = "closed";
    StudyAccessStatus["UNKNOWN"] = "unknown";
})(StudyAccessStatus || (exports.StudyAccessStatus = StudyAccessStatus = {}));
var StudySortBy;
(function (StudySortBy) {
    StudySortBy["RELEVANCE"] = "relevance";
    StudySortBy["CITATIONS"] = "citations";
    StudySortBy["YEAR_DESC"] = "year_desc";
    StudySortBy["YEAR_ASC"] = "year_asc";
})(StudySortBy || (exports.StudySortBy = StudySortBy = {}));
// =============================================
// Library Export
// =============================================
var ExportFormat;
(function (ExportFormat) {
    ExportFormat["CSV"] = "csv";
    ExportFormat["BIBTEX"] = "bibtex";
    ExportFormat["RIS"] = "ris";
    ExportFormat["ANNOTATIONS"] = "annotations";
    ExportFormat["ZIP"] = "zip";
})(ExportFormat || (exports.ExportFormat = ExportFormat = {}));
//# sourceMappingURL=index.js.map